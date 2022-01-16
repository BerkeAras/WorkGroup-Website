import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

// Assets
import ExternalLinkIcon from '../../assets/external-link.svg'

export default function Footer() {
    return (
        <div className="footer">
            <a className="copyright" href="https://berkearas.de/?mtm_campaign=workgroup_landingpage_footer" rel="noreferrer" target="_blank">© Copyright {new Date().getFullYear()} Berke Aras</a>

            <ul className="footer-links">
                <li><a href="https://github.com/BerkeAras/WorkGroup/discussions" rel="noreferrer" target="_blank"><img src={ExternalLinkIcon} alt="External Link" />Feedback</a></li>
                <li><a href="https://demo1.workgroup.berkearas.de/?utm_source=workgroup_landingpage_footer&amp;utm_medium=workgroup_landingpage_footer&amp;utm_campaign=workgroup_landingpage_footer" rel="noreferrer" target="_blank"><img src={ExternalLinkIcon} alt="External Link" />Demo</a></li>
                <li><a href="https://github.com/BerkeAras/WorkGroup" rel="noreferrer" target="_blank"><img src={ExternalLinkIcon} alt="External Link" />GitHub</a></li>
                <li><a href="https://berkearas.de/?mtm_campaign=workgroup_landingpage_footer&amp;datapolicy"><img src={ExternalLinkIcon} alt="External Link" />Data Policy</a></li>
                <li><a href="https://berkearas.de/?mtm_campaign=workgroup_landingpage_footer&amp;imprint"><img src={ExternalLinkIcon} alt="External Link" />Imprint</a></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
        </div>
    )
}