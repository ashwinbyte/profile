import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ModernPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Your Logo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-20">
        <Container>
          <Row className="items-center">
            <Col md={6}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Modern Website
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
                Get Started
              </button>
            </Col>
            <Col md={6}>
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Hero" 
                className="rounded-lg shadow-xl"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <Container>
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <Row>
            {[1, 2, 3].map((item) => (
              <Col md={4} key={item} className="mb-8">
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Feature {item}</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <Container>
          <Row>
            <Col md={4} className="mb-8">
              <h5 className="text-xl font-bold mb-4">About Us</h5>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </Col>
            <Col md={4} className="mb-8">
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </Col>
            <Col md={4} className="mb-8">
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <ul className="space-y-2 text-gray-400">
                <li>123 Street Name</li>
                <li>City, Country</li>
                <li>contact@example.com</li>
                <li>+1 234 567 890</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default ModernPage; 