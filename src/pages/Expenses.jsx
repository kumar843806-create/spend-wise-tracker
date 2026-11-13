
import { useState } from "react";
import { Plus, TrendingDown } from "lucide-react";

import StatCard from "../components/StatCard";
import RecentTransactions from "../components/RecentTransactions";
import TransactionForm from "../components/TransactionForm";

function Expenses({ transactions, addTransaction, search }) {
  const [showForm, setShowForm] = useState(false);

  const expenseTransactions = transactions.filter(
    (item) => item.type === "expense"
  );

  const totalExpenses = expenseTransactions.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const filtered = expenseTransactions.filter((item) =>
    `${item.name} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <h2>Expense Management</h2>
          <p>Monitor where your money is going.</p>
        </div>

        <button
          className="primary-btn add-button"
          onClick={() => setShowForm(true)}
        >
          <Plus size={19} />
          Add Expense
        </button>
      </div>

      <div className="stats-grid single-stat">
        <StatCard
          title="Total Expenses"
          amount={`₹${totalExpenses.toLocaleString("en-IN")}`}
          icon={<TrendingDown size={22} />}
          color="orange"
          note={`${expenseTransactions.length} expense transactions`}
        />
      </div>

      <RecentTransactions transactions={filtered} />

      {showForm && (
        <TransactionForm
          defaultType="expense"
          onAdd={addTransaction}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default Expenses;
