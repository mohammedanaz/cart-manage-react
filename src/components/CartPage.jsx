import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cart/CartSlice';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveFromCart = (id) => {
    console.log('inside handleRemoveFromCart');
    dispatch(removeFromCart({id}));
  };

  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="row">
          {items.map(item => (
            <div key={item.id} className="col-md-4">
              <div className="card mb-4 bg-success-subtle">
                <img src={item.imgUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <input
                    type="number"
                    className="form-control mb-2"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
