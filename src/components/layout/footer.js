// Footer.js

import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
    return (
        <div className="footer container-fluid py-3">
            <div className="row">
                <div className="col-md-6">
                    <span>&copy; 2022 Generative Minds. All rights reserved.</span>
                </div>
                <div className="col-md-6 text-md-right">
                    <span>Email: <a href="mailto:support@generativeminds.com">support@generativeminds.com</a></span>
                    <span className="ml-2">Phone: +1-123-456-7890</span>
                    <span className="ml-2">Twitter: <a href="https://twitter.com/generativeminds" target="_blank" rel="noopener noreferrer">@generativeminds</a></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
