"use client";
import { signOut } from "next-auth/react";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand brand fs-2" href="#">
          <img src="/logo.svg" className="me-2" height={30} width={30} />
          Mahbub Foundation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
      </div>
    </nav>
  );
}
