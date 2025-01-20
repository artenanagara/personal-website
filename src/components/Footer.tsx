import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white py-4">
        <div className="px-4">
            <div className="w-full flex justify-between">
            <div>
                <p className="text-xs">© 2021 Artena. All rights reserved.</p>
            </div>
            <div>
                <a href="https://instagram.com" target="_blank" className="text-xs underline">Instagram</a>
                <a href="https://linkedin.com" target="_blank" className="text-xs underline ml-4">LinkedIn</a>
                <a href="https://github.com" target="_blank" className="text-xs underline ml-4">Github</a>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;