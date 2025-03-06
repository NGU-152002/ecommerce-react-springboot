import React from "react";

const CartOverview = () => {
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 2,
      image: "https://picsum.photos/80/80",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      quantity: 1,
      image: "https://picsum.photos/80/80",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      quantity: 3,
      image: "https://picsum.photos/80/80",
    },
  ];

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {/* Cart Items List */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-base-100 p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-sm btn-ghost">-</button>
              <span>{item.quantity}</span>
              <button className="btn btn-sm btn-ghost">+</button>
            </div>
            <p className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 pt-4 border-t border-base-300">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">${totalCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg">${totalCost.toFixed(2)}</span>
        </div>
        <button className="btn btn-primary w-full mt-6">Checkout</button>
      </div>
    </div>
  );
};

export default CartOverview;