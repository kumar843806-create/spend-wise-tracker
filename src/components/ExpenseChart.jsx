
import { useMemo } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function ExpenseChart({ transactions = [] }) {
  const chartData = useMemo(() => {
    const grouped = {};

    transactions.forEach((item) => {
      const date = new Date(item.date);

      if (Number.isNaN(date.getTime())) return;

      const key = `${date.getFullYear()}-${date.getMonth()}`;

      if (!grouped[key]) {
        grouped[key] = {
          sortDate: new Date(
            date.getFullYear(),
            date.getMonth(),
            1
          ),
          month: date.toLocaleDateString("en-IN", {
            month: "short",
            year: "2-digit"
          }),
          income: 0,
          expense: 0
        };
      }

      const amount = Number(item.amount) || 0;

      if (item.type === "income") {
        grouped[key].income += amount;
      } else if (item.type === "expense") {
        grouped[key].expense += amount;
      }
    });

    return Object.values(grouped)
      .sort((a, b) => a.sortDate - b.sortDate)
      .slice(-6);
  }, [transactions]);

  return (
    <section className="chart-card">
      <div className="section-heading">
        <div>
          <h3>Income vs Expenses</h3>
          <p>Monthly financial activity</p>
        </div>
      </div>

      <div className="chart-container">
        {chartData.length === 0 ? (
          <p>No transaction data available.</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#edf0f5"
              />

              <XAxis dataKey="month" />

              <YAxis
                tickFormatter={(value) =>
                  `₹${value / 1000}k`
                }
              />

              <Tooltip
                formatter={(value) =>
                  `₹${Number(value).toLocaleString("en-IN")}`
                }
              />

              <Legend />

              <Bar
                dataKey="income"
                name="Income"
                fill="#7357E8"
                radius={[5, 5, 0, 0]}
              />

              <Bar
                dataKey="expense"
                name="Expenses"
                fill="#F59E7A"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}

export default ExpenseChart;
