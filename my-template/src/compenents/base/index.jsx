import React from 'react';
import HeaderLayout from '../header'
import 'antd/dist/antd.css';
import './base.scss';
import Intro from "../intro";
import Statistical from "../statistical";
import Template from "../template";
import Tool from "../tooldesign";
import FooterLayout from "../footer";
import Features from "../features";
import Simulation from "../simulation";

function Base() {
    return (
        <>
            <div className="base">
            <HeaderLayout />
            <Intro />
            <Simulation />
            <Features />
            <Tool />
            <Statistical />
            <Template />
            <FooterLayout />
            </div>
        </>


    );
}

export default Base;