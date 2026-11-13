import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";
import Reports from "./pages/Reports";

import "./App.css";

const initialTransactions = [
  {
    id: 1,
    name: "Salary",
    category: "Income",
    date: "2026-11-01T10:00:00",
    amount: 35000,
    type: "income"
  },
  {
    id: 2,
    name: "Grocery Shopping",
    category: "Food",
    date: "2026-11-03T10:00:00",
    amount: 2500,
    type: "expense"
  },
  {
    id: 3,
    name: "Electricity Bill",
    category: "Bills",
    date: "2026-11-05T10:00:00",
    amount: 1200,
    type: "expense"
  },
  {
    id: 4,
    name: "Freelance Work",
    category: "Income",
    date: "2026-11-06T10:00:00",
    amount: 8000,
    type: "income"
  },
  {
    id: 5,
    name: "Shopping",
    category: "Shopping",
    date: "2026-11-08T10:00:00",
    amount: 1800,
    type: "expense"
  }
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [transactions, setTransactions] = useState(
    initialTransactions
  );

  const [showForm, setShowForm] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState(15000);

  function addTransaction(newTransaction) {
    setTransactions((previous) => [
      newTransaction,
      ...previous
    ]);
  }

  function renderPage() {
    switch (activePage) {
      case "Dashboard":
        return (
          <Dashboard
            transactions={transactions}
            showForm={showForm}
            setShowForm={setShowForm}
            addTransaction={addTransaction}
            search={search}
          />
        );

      case "Income":
        return (
          <Income
            transactions={transactions}
            addTransaction={addTransaction}
            search={search}
          />
        );

      case "Expenses":
        return (
          <Expenses
            transactions={transactions}
            addTransaction={addTransaction}
            search={search}
          />
        );

      case "Budget":
        return (
          <Budget
            transactions={transactions}
            budget={budget}
            setBudget={setBudget}
          />
        );

      case "Reports":
        return <Reports transactions={transactions} />;

      case "Settings":
        return (
          <section className="placeholder-page">
            <h2>Settings</h2>
            <p>Settings module coming soon.</p>
          </section>
        );

      default:
        return null;
    }
  }

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <main className="main-content">
        <Navbar
          activePage={activePage}
          setMobileMenu={setMobileMenu}
          search={search}
          setSearch={setSearch}
        />

        {renderPage()}

        <footer>
          © 2026 SpendWise. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
