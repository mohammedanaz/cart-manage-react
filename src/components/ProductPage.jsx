import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';


const products = [
  { id: 1, name: 'Apple', price: 100 , imgUrl: '/apple.jpg'},
  { id: 2, name: 'Banana', price: 200 , imgUrl: '/banana.jpg' },
  { id: 3, name: 'Cherry', price: 300 , imgUrl: '/cherry.jpg'},
  { id: 4, name: 'Grape', price: 400 , imgUrl: '/grape.jpg'},
  { id: 5, name: 'Guava', price: 500 , imgUrl: '/guava.jpg'},
  { id: 6, name: 'Mango', price: 600 , imgUrl: '/mango.jpg'},
];

const ProductPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4 bg-info-subtle">
              <img src={product.imgUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
