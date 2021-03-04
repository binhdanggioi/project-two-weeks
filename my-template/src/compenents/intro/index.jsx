import React from 'react';
import 'antd/dist/antd.css';
import './intro.scss'
import { CaretRightOutlined } from '@ant-design/icons';
import {Button} from "antd";

function Intro() {
    return (
        <div className="introduce">
            <h1 className="introduce__h1">Design System for React JS</h1>
            <h2 className="introduce__h2">Atomize React is a UI framework
                that helps developers collaborate with designers and build consistent user interfaces effortlessly.
            </h2>
            <div className="introduce__getting">
                <div className="introduce__getting--started">
                    <Button type="primary" >
                        Get Started Now
                    </Button>
                </div>
                <div className="introduce__getting--watch">
                    <Button icon={<CaretRightOutlined />}>Watch Video</Button>
                </div>
            </div>
        </div>
    );
}

export default Intro;