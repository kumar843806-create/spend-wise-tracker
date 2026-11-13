import React from "react";

import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Plus
} from "lucide-react";

import StatCard from "../components/StatCard";
import ExpenseChart from "../components/ExpenseChart";
import RecentTransactions from "../components/RecentTransactions";
import TransactionForm from "../components/TransactionForm";

function Dashboard({
  transactions,
  showForm,
  setShowForm,
  addTransaction,
  search
}) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const balance = income - expenses;

  const filteredTransactions = transactions.filter((item) =>
    `${item.name} ${item.category} ${item.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const format = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <h2>Dashboard Overview</h2>
          <p>Track your money and manage your finances.</p>
        </div>

        <button
          className="primary-btn add-button"
          onClick={() => setShowForm(true)}
        >
          <Plus size={19} />
          Add Transaction
        </button>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Balance"
          amount={format(balance)}
          icon={<Wallet size={22} />}
          color="purple"
          note="Income minus expenses"
        />

        <StatCard
          title="Total Income"
          amount={format(income)}
          icon={<TrendingUp size={22} />}
          color="green"
          note="All recorded income"
        />

        <StatCard
          title="Total Expenses"
          amount={format(expenses)}
          icon={<TrendingDown size={22} />}
          color="orange"
          note="All recorded expenses"
        />

        <StatCard
          title="Net Savings"
          amount={format(balance)}
          icon={<PiggyBank size={22} />}
          color="blue"
          note="Your remaining money"
        />
      </div>

      <ExpenseChart transactions={transactions} />

      <RecentTransactions transactions={filteredTransactions} />

      {showForm && (
        <TransactionForm
          onAdd={addTransaction}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;
