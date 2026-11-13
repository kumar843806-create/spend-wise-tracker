import React from "react";

import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  TrendingDown,
  ChartNoAxesCombined,
  Settings,
  X
} from "lucide-react";
const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Income", icon: TrendingUp },
  { name: "Expenses", icon: TrendingDown },
  { name: "Budget", icon: Wallet },
  { name: "Reports", icon: ChartNoAxesCombined }
];

function Sidebar({
  activePage,
  setActivePage,
  mobileMenu,
  setMobileMenu
}) {
  return (
    <>
      {mobileMenu && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-icon">
            <Wallet size={23} />
          </div>

          <h2>SpendWise</h2>

          <button
            className="close-menu"
            onClick={() => setMobileMenu(false)}
          >
            <X size={20} />
          </button>
        </div>

        <p className="menu-label">MENU</p>

        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActivePage(item.name);
                  setMobileMenu(false);
                }}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <button
            className={`nav-item ${
              activePage === "Settings" ? "active" : ""
            }`}
            onClick={() => {
              setActivePage("Settings");
              setMobileMenu(false);
            }}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>

          <div className="user-card">
            <div className="avatar">U</div>
            <div>
              <h4>User Name</h4>
              <p>Free Account</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
