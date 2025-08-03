import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;