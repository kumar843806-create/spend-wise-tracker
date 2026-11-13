
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

import StatCard from "../components/StatCard";
import ExpenseChart from "../components/ExpenseChart";
import RecentTransactions from "../components/RecentTransactions";

function Reports({ transactions }) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const balance = income - expenses;

  const format = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <h2>Financial Reports</h2>
          <p>Analyze your overall financial performance.</p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Income"
          amount={format(income)}
          icon={<TrendingUp size={22} />}
          color="green"
          note="Total earnings"
        />

        <StatCard
          title="Expenses"
          amount={format(expenses)}
          icon={<TrendingDown size={22} />}
          color="orange"
          note="Total spending"
        />

        <StatCard
          title="Net Balance"
          amount={format(balance)}
          icon={<Wallet size={22} />}
          color="purple"
          note="Income minus expenses"
        />
      </div>

      <ExpenseChart transactions={transactions} />

      <RecentTransactions transactions={transactions} />
    </div>
  );
}

export default Reports;
