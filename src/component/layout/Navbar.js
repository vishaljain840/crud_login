import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          React CRUD
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/user/add">
          Add Patients
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
