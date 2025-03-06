import { useState } from "react";
import { Link } from "react-router";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    password: "password123",
  });

  const [orders, setOrders] = useState([
    { id: 1, item: "Laptop", price: "$1000", date: "2025-03-01" },
    { id: 2, item: "Headphones", price: "$200", date: "2025-03-03" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className=" p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
           disabled
            className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            disabled
            className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
           disabled
            className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
           disabled
            className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

      </div>
        <button className="btn btn-accent mb-10 mr-10">Edit Profile</button>
        <button className="btn btn-error mb-10"><Link to="/auth"> Log Out</Link></button>

      <h2 className="text-xl font-bold mb-4">Order History</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Product</th>
        <th>Address</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>2454</th>
        <td>POLO Shirt</td>
        <td>Sunrise apt,Kukatpally,Hyd...</td>
        <td>$124</td>
        <td>22 Feb 2025</td>
        <td>
        <button className="btn btn-warning">View</button>
        </td>

      </tr>

      <tr>
        <th>2454</th>
        <td>POLO Shirt</td>
        <td>Sunrise apt,Kukatpally,Hyd...</td>
        <td>$124</td>
        <td>22 Feb 2025</td>
        <td>
        <button className="btn btn-warning">View</button>
        </td>

      </tr>

      <tr>
        <th>2454</th>
        <td>POLO Shirt</td>
        <td>Sunrise apt,Kukatpally,Hyd...</td>
        <td>$124</td>
        <td>22 Feb 2025</td>
        <td>
        <button className="btn btn-warning">View</button>
        </td>

      </tr>

    </tbody>
  </table>
</div>
    </div>
  );
}
