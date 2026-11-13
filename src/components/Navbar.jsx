import React from "react";
import { Bell, Search, Menu } from "lucide-react";

function Navbar({
  activePage,
  setMobileMenu,
  search,
  setSearch
}) {
  return (
    <header className="topbar">
      <button
        className="menu-toggle"
        onClick={() => setMobileMenu(true)}
      >
        <Menu size={23} />
      </button>

      <div className="page-heading">
        <h2>{activePage}</h2>
        <p>Welcome back! Here's your financial overview.</p>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <Search size={18} />

          <input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="notification" type="button">
          <Bell size={20} />
          <span />
        </button>

        <div className="avatar top-avatar">U</div>
      </div>
    </header>
  );
}

export default Navbar;
