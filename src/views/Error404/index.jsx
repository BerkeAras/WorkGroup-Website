import React, { useState } from 'react';
import {
	Link
} from "react-router-dom";
import './style.scss';
import TryWorkGroupModal from '../../components/tryWorkGroupModal';

// Assets
import ErrorIcon from '../../assets/alert-triangle.svg';
export default function Error404() {

    const [tryWorkGroupModalVisible, setTryWorkGroupModalVisible] = useState(false);

    return (
        <div className="view error-404" id="content">

            <img src={ErrorIcon} alt="Error 404 – Page not found!" />

            <h1>Error 404 – Page not found!</h1>

            <Link to="/" className="button">Go to Homepage</Link>

        </div>
    )
}