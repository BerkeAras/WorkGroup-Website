import React, { useCallback, useEffect } from 'react';
import './style.scss';
import FocusTrap from 'focus-trap-react';
import { Link } from 'react-router-dom';

// Assets
import {ReactComponent as CloseIcon} from '../../assets/x.svg';

export default function TryWorkGroupModal(props) {

    const escapeKey = useCallback((event) => {
        if (event.keyCode === 27) {
            props.closeModal();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escapeKey, false);

        return () => {
            document.removeEventListener("keydown", escapeKey, false);
        };
    }, []);

    const detectBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            props.closeModal();
        }
    }

    return (
        <FocusTrap>
            <div onClick={detectBackdropClick} className="tryWorkGroupModal modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="modal-header-title">Try WorkGroup</span>
                        <button onClick={props.closeModal} className="modal-header-close"><CloseIcon /></button>
                    </div>
                    <p>
                        You can try WorkGroup on your local machine or on our hosted demo.<br />
                        <br />
                        <b>Login Credentials for the demo:</b><br />
                        <b>E-Mail:</b> john.doe@mail.com<br />
                        <b>Password:</b> password
                    </p><br />
                    <a href="https://demo1.workgroup.berkearas.de/?utm_source=workgroup_landingpage_try_modal&amp;utm_medium=workgroup_landingpage_try_modal&amp;utm_campaign=workgroup_landingpage_try_modal" target="_blank" rel="noreferrer" className="button">Try WorkGroup Demo</a>&nbsp;
                    <a href="https://github.com/BerkeAras/WorkGroup/releases" target="_blank" rel="noreferrer" className="button button--light">Download</a>
                </div>
            </div>
        </FocusTrap>
    )
}