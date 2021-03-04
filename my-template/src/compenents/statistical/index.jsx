import React from 'react';
import 'antd/dist/antd.css';
import './statistical.scss';

function Statistical() {
    return(
        <>
            <div className="statistical">
                <div className="statistical__wrap">
                    <div className="statistical__wrap--data">
                        <h1>15+</h1>
                        <p>Ready to use React Components</p>
                    </div>
                    <div className="statistical__wrap--data">
                        <h1>60+</h1>
                        <p>Predefined colors for theme setup</p>
                    </div>
                    <div className="statistical__wrap--data">
                        <h1>&lt;/&gt;</h1>
                        <p>Detailed documentation for each component</p>
                    </div>
                    <div className="statistical__wrap--data">
                        <h1>FREE</h1>
                        <p>Open source with regular updates</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistical;