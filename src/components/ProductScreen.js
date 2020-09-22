import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const ProductScreen = (props) => {
    console.log(props.match.params.id)
    const product = data.products.find(p => p.id === props.match.params.id);
    console.log(product)

    return (
    <div className="container">
        <div className="row">
            {/* Link para voltar */}
            <Link to={'/'}>Voltar para página inicial</Link>
        </div>
        <div className="row">
            
            <div className="col">
                <div className="card mt-4">
                    <img className="card-img-top img-fluid" src={product.image} alt="phot" />
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <h4>R$ {product.price}</h4>
                        <p className="card-text">{product.description}</p>
                        
                        <Link to={"/cart"} className="btn btn-primary">Comprar</Link>
                    </div>
                </div>

                <div className="card card-outline-secondary my-4">
                    <div className="card-header">
                        Product Reviews
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                        <hr />
                        <Link to={"/productReview"} className="btn btn-success">Leave a Review</Link>
                    </div>
                </div>
                {/* card com as infos */}
                
            </div>

        </div>
    </div>);
}

export default ProductScreen;