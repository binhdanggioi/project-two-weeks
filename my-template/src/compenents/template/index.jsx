import React from 'react';
import 'antd/dist/antd.css';
import './template.scss'

function Template() {
    return (
            <div className="template">
                <div className="template__intro">
                    <h1>UI Templates are on their way 🚀</h1>
                    <p className="template__intro--text">Official UI templates build on Atomize React will be released very soon.</p>
                </div>
                <div className="template__button">
                    <button shape="round">
                        <a href="ttps://atomizecode.com/">Get notified</a>
                    </button>
                    <svg viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                        d="M15.5857864,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L15.5857864,11 L12.2928932,7.70710678 C11.9023689,7.31658249 11.9023689,6.68341751 12.2928932,6.29289322 C12.6834175,5.90236893 13.3165825,5.90236893 13.7071068,6.29289322 L18.7071068,11.2928932 C19.0976311,11.6834175 19.0976311,12.3165825 18.7071068,12.7071068 L13.7071068,17.7071068 C13.3165825,18.0976311 12.6834175,18.0976311 12.2928932,17.7071068 C11.9023689,17.3165825 11.9023689,16.6834175 12.2928932,16.2928932 L15.5857864,13 Z"/>
                    </svg>
                </div>
            </div>
    );
}
export default Template;