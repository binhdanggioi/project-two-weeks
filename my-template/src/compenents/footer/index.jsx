import React from 'react';
import 'antd/dist/antd.css';
import './footer.scss';

function FooterLayout() {
    return(
        <>
            <div className="footer">
                <div className="footer__menu">
                    <div className="footer__menu">
                        <ul>
                            <li className="header"><p>docs</p></li>
                            <li className="title"><a href="#">Installation</a></li>
                            <li className="title"><a href="#">Theme Setup</a></li>
                            <li className="title"><a href="#">Grid</a></li>
                            <li className="title"><a href="#">Atoms</a></li>
                            <li className="title"><a href="#">Molecules</a></li>
                            <li className="title"><a href="#">Functions</a></li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <ul>
                            <li className="header"><p>Atomize</p></li>
                            <li className="title"><a href="#">Features</a></li>
                            <li className="title"><a href="#">Design</a></li>
                            <li className="title"><a href="#">Development</a></li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <ul>
                            <li className="header"><p>Resources</p></li>
                            <li className="title"><a href="#">Sketch File</a></li>
                            <li className="title"><a href="#">Github</a></li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <ul>
                            <li className="header"><p>About</p></li>
                            <li className="title"><a href="#">Showcase</a></li>
                            <li className="title"><a href="#">Contribute</a></li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <ul>
                            <li className="header"><p>Extras</p></li>
                            <li className="title"><a href="#">Blog</a></li>
                            <li className="title"><a href="#">Need Help?</a></li>
                            <li className="title"><a href="#">Give FeedBack</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__contact">
                    e
                </div>
            </div>
        </>
    );
}

export default FooterLayout;