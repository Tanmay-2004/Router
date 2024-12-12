import React from "react";

function footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">CineCampus</p>
            <p>&copy; 2024 CineCampus. All rights reserved.</p>
          </div>
          <div>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
                <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
