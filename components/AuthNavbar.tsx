"use client";
import { signOut, useSession } from "next-auth/react";

export default function AuthNavbar() {
    const {data:session} = useSession()

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
       
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text me-3">Welcome {session?.user.username}!</span>
            <a className="btn btn-sm btn-danger" onClick={() => signOut({callbackUrl:"/"})}>Log Out</a>
          </div>
        
      </div>
    </nav>
  );
}
