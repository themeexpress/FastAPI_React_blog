import { NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";
import { useState } from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <h1 className="text-xl font-bold">FastBlog</h1>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className="hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/login" className="hover:text-blue-600">
            Login
          </NavLink>
          <NavLink to="/register" className="hover:text-blue-600">
            Register
          </NavLink>
        </nav>

      </div>
    </header>
  )
}
