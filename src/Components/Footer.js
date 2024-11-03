import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="container d-grid">
                    <h5 className='News'>NewsAir - Your Daily News</h5>
                    <p>Your trusted source for news updates and insights.</p>
                    <p>
                        <strong>Contact :</strong> Email: <a href="mailto:riteshbgmisingh@gmail.com" className="text-white">riteshbgmisingh@gmail.com</a>
                    </p>
                    <p>
                        <a href="/privacy" className="text-white">Privacy Policy</a> | 
                        <a href="/terms" className="text-white"> Terms of Service</a>
                    </p>
                    <p>&copy; {new Date().getFullYear()} NewsAir. All rights reserved.</p>
                </div>

                <div className="d-flex flex-column align-items-center align-items-md-end mt-3 mt-md-0">
                    <h3 className="mb-3">Contact Us</h3>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                            <i className="icon fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                            <i className=" icon fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                            <i className="icon fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                            <i className="icon fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
