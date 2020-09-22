import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mt-2 container top-of-page ">
          <div className="row">
            <div className="col">
            <Link className="navbar-brand" to="#sec">
              <img src="/assets/logo_webjump.png" alt="logotipo webjump" />
            </Link>
          </div>
            <div className="col form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          </div>
        </div>
        <nav className=" mt-5 custom-nav-bar navbar navbar-expand-lg  ">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="#sec">Página inicial </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#sec">Camisetas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#sec">Calças</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#sec">Sapatos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#sec">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  {/* Page Content */}
        <div className="mt-5 container">

          <div className="row">
            <div className="col-lg-3">
              <h1 className="my-4">Categorias</h1>
              <div className="list-group">
                <Link to="#shirts" className="list-group-item">Camisetas</Link>
                <Link to="#pants" className="list-group-item">Calças </Link>
                <Link to="#shoes" className="list-group-item">Sapatos</Link>
                <Link to="#allProducts" className="list-group-item">Todos os produtos</Link>
              </div>

            </div>
            {/* /.col-lg-3 */}

            <div className="col-lg-9">
              <div className="row">
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/" exact component={HomeScreen} />
              </div>
              {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}

      {/* Footer */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white"> &copy; Paulo Nascimento 2020</p>
          </div>
          {/* /.container */}
        </footer>
      </div>
  </BrowserRouter>
  );
}

export default App;
