import React from "react";

const TrackOrder = () => {
  // Sample order history data
  const orders = [
    {
      id: 1,
      status: "Delivered",
      date: "2023-10-01",
      details: "Wireless Headphones - $99.99",
    },
    {
      id: 2,
      status: "Shipped",
      date: "2023-09-25",
      details: "Smartwatch - $149.99",
    },
    {
      id: 3,
      status: "Processing",
      date: "2023-09-20",
      details: "Bluetooth Speaker - $59.99",
    },
    {
      id: 4,
      status: "Cancelled",
      date: "2023-09-15",
      details: "Wireless Earbuds - $79.99",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>

      {/* Timeline Container */}
      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

        {/* Order Items */}
        {orders.map((order, index) => (
          <div key={order.id} className="flex items-start gap-4">
            {/* Timeline Dot */}
            <div className="relative">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full z-10">
                <span className="text-white text-sm">{index + 1}</span>
              </div>
              {index !== orders.length - 1 && (
                <div className="absolute left-4 top-8 h-full w-0.5 bg-gray-200"></div>
              )}
            </div>

            {/* Order Details */}
            <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{order.status}</h3>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">{order.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;