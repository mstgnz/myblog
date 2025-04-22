import React from 'react';

const AdminPage = () => {
  return (
    <div className="container xl:max-w-6xl mx-auto px-4 flex flex-col gap-4 lg:gap-6">
      <div className="grid grid-cols-1 py-6">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl md:text-center font-medium py-4">
            Admin Page
          </h1>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p className="font-medium">Protected Area</p>
            <p>This page is only accessible to the admin user (ID: 1)</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-4">Admin Dashboard</h2>
            <p className="mb-4">Welcome to the admin area. From here you can manage your site.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Content Management</h3>
                <p className="text-sm text-gray-600">Manage blog posts and pages</p>
              </div>
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">User Management</h3>
                <p className="text-sm text-gray-600">Manage users and permissions</p>
              </div>
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium">Site Settings</h3>
                <p className="text-sm text-gray-600">Configure site settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
