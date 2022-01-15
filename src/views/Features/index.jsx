import React, { useState } from 'react';
import {
	Link
} from "react-router-dom";
import './style.scss';
import TryWorkGroupModal from '../../components/tryWorkGroupModal';

// Assets
import Groups from '../../assets/features/groups.png';
import HomepageTablet from '../../assets/features/homepage-tablet.png';
import HomepageMobile from '../../assets/features/homepage-mobile-cropped.png';
import KnowledgeBase from '../../assets/features/knowledge-base.png';
import KnowledgeBaseEditor from '../../assets/features/knowledge-base-editor.png';

export default function Features() {

    const [tryWorkGroupModalVisible, setTryWorkGroupModalVisible] = useState(false);

    return (
        <div className="view features" id="content">

            {tryWorkGroupModalVisible && (<TryWorkGroupModal closeModal={() => {setTryWorkGroupModalVisible(false);}} />)}

            <section className="home-section home-section--small">
                <div className="home-section-backdrop">
                    <div className="home-section-backdrop-content home-section-backdrop-content--centered">
                        <h3>YOUR SOCIAL INTRANET</h3>
                        <h1>WorkGroup</h1>

                        <button onClick={() => {setTryWorkGroupModalVisible(true)}} className="button">Try WorkGroup</button>
                        <a href="https://github.com/BerkeAras/WorkGroup/releases" target="_blank" rel="noreferrer" className="button button--light">Download</a>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features-item features-item--left features-item--company-wide-posts">
                <div className="features-item-image" style={{backgroundImage:`url(${HomepageTablet})`}}></div>
                <div className="features-item-content">
                    <h1>Company Wide Posts</h1>
                    <p>Send Company-Wide Posts so everyone can read it! The posts of your managers can be pinned and highlighted!</p>
                </div>
            </section>

            <section className="features-item features-item--right features-item--groups">
                <div className="features-item-content">
                    <h1>Groups</h1>
                    <p>Share your thoughts in your group. Groups can be public or private, so you can control the privacy!</p>
                </div>
                <div className="features-item-image" style={{backgroundImage:`url(${Groups})`}}></div>
            </section>

            <section className="features-item features-item--left features-item--knowledge-base">
                <div className="features-item-image" style={{backgroundImage:`url(${KnowledgeBase})`}}></div>
                <div className="features-item-content">
                    <h1>Knowledge Base</h1>
                    <p>Use Markdown to create pages and categories in your own company-wide knowledge-base! You can use the inline-editor to modify files without downloading and re-uploading.</p>
                </div>
            </section>

            <section className="features-item features-item--right features-item--mobile">
                <div className="features-item-content">
                    <h1>Mobile</h1>
                    <p>The whole WorkGroup Application is mobile-friendly, so you can access to your company-data and collaborate remotely!</p>
                </div>
                <div className="features-item-image" style={{backgroundImage:`url(${HomepageMobile})`}}></div>
            </section>

        </div>
    )
}