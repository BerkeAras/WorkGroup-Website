import React, { useState } from 'react';
import {
	Link
} from "react-router-dom";
import './style.scss';
import TryWorkGroupModal from '../../components/tryWorkGroupModal';

// Assets
import mockup from '../../assets/mockup.png';
import devices from '../../assets/home-cropped.png';
import teamMembers from '../../assets/team.jpg';
import team from '././../../assets/team.png';
import security from '././../../assets/security.png';
import openSource from '././../../assets/code.png';

export default function Home() {

    const [tryWorkGroupModalVisible, setTryWorkGroupModalVisible] = useState(false);

    return (
        <div className="view home" id="content">

            {tryWorkGroupModalVisible && (<TryWorkGroupModal closeModal={() => {setTryWorkGroupModalVisible(false);}} />)}

            <section className="home-section">
                <div className="home-section-backdrop">
                    <div className="home-section-backdrop-content">
                        <h3>YOUR SOCIAL INTRANET</h3>
                        <h1>WorkGroup</h1>
                        <p>
                            WorkGroup increases productivity and the cohesion between colleagues. The self-hosted principle protects all your data and keeps everything on your server — all for free.
                        </p>

                        <button onClick={() => {setTryWorkGroupModalVisible(true)}} className="button">Try WorkGroup</button>
                        <a href="https://github.com/BerkeAras/WorkGroup/releases" target="_blank" rel="noreferrer" className="button button--light">Download</a>
                    </div>

                    <img loading="lazy" tabIndex={0} src={mockup} alt="WorkGroup" />
                </div>
            </section>

            <section className="home-try-section">
                <div className="home-try-section-content">
                    <h1>WorkGroup in your Company</h1>
                    <p>
                        WorkGroup is an open source project, so it is free to use and modify. Why don&apos;t you give it a try?
                        <br />
                        Try it on your local machine or use our hosted demo.
                    </p>
                    <button onClick={() => {setTryWorkGroupModalVisible(true)}} className="button">Try WorkGroup</button>&nbsp;
                    <a href="https://github.com/BerkeAras/WorkGroup/releases" target="_blank" rel="noreferrer" className="button button--light">Download</a>
                </div>
                <div className="home-try-section-image" style={{backgroundImage:`url(${devices})`}}></div>
            </section>

            <section className="home-2-section">
                <div className="home-2-section-card">
                    <h1>WorkGroup in your Company</h1>
                    <p>
                        WorkGroup is an open source project, so it is free to use and modify. Why don&apos;t you give it a try?
                        <br />
                        Try it on your local machine or use our hosted demo.
                    </p>
                    <button onClick={() => {setTryWorkGroupModalVisible(true)}} className="button">Try WorkGroup</button>&nbsp;
                    <a href="https://github.com/BerkeAras/WorkGroup/releases" target="_blank" rel="noreferrer" className="button button--light">Download</a>
                </div>
            </section>

            <section className="features-section">
                <div className="features-section-grid">
                    <div className="features-section-grid-item">
                        <h1>Company-Wide Posts</h1>
                        <p>Send Company-Wide Posts so everyone can read it! The posts of your managers can be pinned and highlighted!</p>
                    </div>
                    <div className="features-section-grid-item">
                        <h1>Group-Wide Posts</h1>
                        <p>Share your thoughts in your group. Groups can be public or private, so you can control the privacy!</p>
                    </div>
                    <div className="features-section-grid-item">
                        <h1>Videocalls</h1>
                        <p>Start Video-Calls with up to 100 People! All services are hosted on your server, so nobody else can access to it.</p>
                    </div>
                    <div className="features-section-grid-item">
                        <h1>Knowledge-Base</h1>
                        <p>Use Markdown to create pages and categories in your own company-wide knowledge-base!</p>
                    </div>
                </div>

                <Link to="/features" className="button">More Features</Link>

            </section>

            <section className="benefits-section">
                <div className="benefits-item">
                    <div className="benefits-item-content">
                        <h1>Reach your employees</h1>
                        <p>Reach all of your employees in no time. All are included. Do you only want to address your colleagues in your department? Then use the group function!</p>
                    </div>
                    <div style={{textAlign:'right'}} className="benefits-item-image"><img loading="lazy"  src={team} alt="Reach your employees" /></div>
                </div>
                <div className="benefits-item">
                    <div style={{textAlign:'left'}} className="benefits-item-image"><img loading="lazy"  src={security} alt="Secure Network" /></div>
                    <div className="benefits-item-content">
                        <h1>Secure Network</h1>
                        <p>Your data is with you. Due to the self-hosted principle, no data is transmitted to external servers. If your server is secure, WorkGroup is secure too. Companies with critical infrastructure can use WorkGroup in a dedicated instance.</p>
                    </div>
                </div>
                <div className="benefits-item">
                    <div className="benefits-item-content">
                        <h1>Open Source</h1>
                        <p>WorkGroup is - and will remain - free. Because it is open source, you can copy, adapt and use the code as you wish. So why not try it out? You have nothing to lose!</p>
                    </div>
                    <div style={{textAlign:'right'}} className="benefits-item-image"><img loading="lazy"  src={openSource} alt="Open Source" /></div>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-section-card">
                    <h1>Need help?</h1>
                    <p>
                        Contact us to get more information about how vou can use WorkGroup in your company.
                    </p>
                    <a href="https://github.com/BerkeAras/WorkGroup/discussions" target="_blank" rel="noreferrer" className="button">Ask the Community</a>
                    <a href="https://berkearas.de/?mtm_campaign=workgroup_landingpage_contact#contact" target="_blank" rel="noreferrer" className="button button--light">Contact</a>
                </div>
            </section>

        </div>
    )
}