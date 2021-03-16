/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './statistical.scss';

function Statistical() {

    const [data, setData] = useState([
        {
            id: 1,
            title: "15+",
            content: "Ready to use React Components",
        },
        {
            id: 2,
            title: "60+",
            content: "Predefined colors for theme setup",
        },
        {
            id: 3,
            title: `</>`,
            content: "Detailed documentation for each component",
        },
        {
            id: 4,
            title: "FREE",
            content: "Open source with regular updates",
        },
    ]);

    const lists = data.map((list) => {
        return (
            <div key={list.id} className="statistical__wrap--data">
                        <h1>{list.title}</h1>
                        <p>{list.content}</p>
            </div>
        )
    })

    return(
            <div className="statistical">
                <div className="statistical__wrap">{lists}</div>
            </div>
    );
}

export default Statistical;