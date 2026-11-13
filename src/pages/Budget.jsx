
import { useState } from "react";
import { Wallet, Target } from "lucide-react";
import StatCard from "../components/StatCard";

function Budget({ transactions, budget, setBudget }) {
  const [newBudget, setNewBudget] = useState(String(budget));

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const remaining = budget - expenses;

  const percentage =
    budget > 0
      ? Math.min((expenses / budget) * 100, 100)
      : 0;

  function updateBudget(e) {
    e.preventDefault();

    const amount = Number(newBudget);

    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    setBudget(amount);
  }

  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <h2>Budget Management</h2>
          <p>Set your spending limit and manage your savings.</p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Budget"
          amount={`₹${budget.toLocaleString("en-IN")}`}
          icon={<Wallet size={22} />}
          color="purple"
          note="Your spending limit"
        />

        <StatCard
          title="Amount Spent"
          amount={`₹${expenses.toLocaleString("en-IN")}`}
          icon={<Target size={22} />}
          color="orange"
          note="Total recorded expenses"
        />

        <StatCard
          title="Remaining Budget"
          amount={`₹${remaining.toLocaleString("en-IN")}`}
          icon={<Wallet size={22} />}
          color="green"
          note="Available budget"
        />
      </div>

      <section className="budget-card">
        <h3>Monthly Budget Progress</h3>

        <div className="budget-info">
          <span>Spent: ₹{expenses.toLocaleString("en-IN")}</span>
          <span>Budget: ₹{budget.toLocaleString("en-IN")}</span>
        </div>

        <div className="progress-track">
          <div
            className={`progress-fill ${
              percentage >= 100 ? "over-budget" : ""
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="budget-percentage">
          {percentage.toFixed(1)}% of your budget used
        </p>

        {remaining < 0 && (
          <p className="warning-text">
            You have exceeded your budget!
          </p>
        )}
      </section>

      <section className="budget-card">
        <h3>Update Your Budget</h3>

        <form className="budget-form" onSubmit={updateBudget}>
          <input
            type="number"
            min="1"
            step="0.01"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
            placeholder="Enter monthly budget"
            required
          />

          <button className="primary-btn" type="submit">
            Update Budget
          </button>
        </form>
      </section>
    </div>
  );
}

export default Budget;
