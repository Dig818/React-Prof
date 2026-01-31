import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/protect">Protect</Link>
      </nav>
      <div style={{ marginTop: 16 }}>
        <Outlet />
      </div>
    </div>
  );
}
