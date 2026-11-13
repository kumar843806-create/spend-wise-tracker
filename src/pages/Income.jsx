
import { useState } from "react";
import { Plus, TrendingUp } from "lucide-react";

import StatCard from "../components/StatCard";
import RecentTransactions from "../components/RecentTransactions";
import TransactionForm from "../components/TransactionForm";

function Income({ transactions, addTransaction, search }) {
  const [showForm, setShowForm] = useState(false);

  const incomeTransactions = transactions.filter(
    (item) => item.type === "income"
  );

  const totalIncome = incomeTransactions.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const filtered = incomeTransactions.filter((item) =>
    `${item.name} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <h2>Income Management</h2>
          <p>Manage and track all your income sources.</p>
        </div>

        <button
          className="primary-btn add-button"
          onClick={() => setShowForm(true)}
        >
          <Plus size={19} />
          Add Income
        </button>
      </div>

      <div className="stats-grid single-stat">
        <StatCard
          title="Total Income"
          amount={`₹${totalIncome.toLocaleString("en-IN")}`}
          icon={<TrendingUp size={22} />}
          color="green"
          note={`${incomeTransactions.length} income transactions`}
        />
      </div>

      <RecentTransactions transactions={filtered} />

      {showForm && (
        <TransactionForm
          defaultType="income"
          onAdd={addTransaction}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default Income;
