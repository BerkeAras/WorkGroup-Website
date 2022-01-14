import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <span className="copyright">© Copyright 2022 Berke Aras</span>

            <ul className="footer-links">
                <li><Link to="/">Feedback</Link></li>
                <li><Link to="/">Demo</Link></li>
                <li><Link to="/">GitHub</Link></li>
                <li><Link to="/">Cookie Policy</Link></li>
                <li><Link to="/">Data Policy</Link></li>
                <li><Link to="/">Imprint</Link></li>
            </ul>
        </div>
    )
}