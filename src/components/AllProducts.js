import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    
    return <>
    <div className="container">
      <div className="row mb-5">
        <div className="col">
          <h1 className="home-title">Produtos em destaque</h1>
        </div>
      </div>
      <div className="row">
      {
        data.products.map(product => 
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <Link to={ '/product/' + product.id}><img className="card-img-top" src={product.image} alt="" /></Link>
              <div className="card-body">
                <h4 className="card-title">
                  <Link to={ '/product/' + product.id }>{product.name}</Link>
                </h4>
                <h5>${product.price}</h5>
                <Link to="#cart" className="btn btn-primary">Comprar</Link>
              </div>
            
            </div>
          </div>
        )
      }

      </div>

    </div>
    
    </>
}

export default AllProducts;