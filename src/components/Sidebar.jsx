import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-700 text-white w-full md:w-64 h-fit md:min-h-screen p-4">
      <ul className="space-y-2">
        <li><a href="/" className="block hover:bg-gray-600 p-2 rounded">Dashboard</a></li>
        <li><a href="/users" className="block hover:bg-gray-600 p-2 rounded">Users</a></li>
        <li><a href="/orders" className="block hover:bg-gray-600 p-2 rounded">Orders</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;