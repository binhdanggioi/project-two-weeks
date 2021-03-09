/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'antd/dist/antd.css';
import { Card,Row,Col } from 'antd';
import './features.scss';



function Features() {
    return(
        <>
            <div className="features">
                <span>Key features</span>
                <p className="features__use">Why use Atomize React?</p>
                <p className="features__help">Atomize React helps you in building fully responsive websites and products that match your style.</p>
                <div className="features__attribute">
                    <Row className="responsive" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6}>
                            <div>
                                <Card className="features__attribute--flex">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRkZDMTQ4IiByeD0iMyIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMS41IDFMMjEuNSAzMU0xMC41IDFMMTAuNSAzMSIvPgogIDwvZz4KPC9zdmc+Cg=="/>
                                    <p className="design">Flexible Grid</p>
                                    <p className="intro">Change grid variables or give decimal column size.</p>
                                    <a href="https:">
                                        See How
                                    </a>
                                </Card>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card className="features__attribute--flex">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRkY2QjM4IiByeD0iMyIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yLjczMzc2MDY3LDkuNDI0MzMxMDkgQzIuNTQ0NTAyMzEsOS4yMTk5MzIwNiAyLjI3ODU2MzYyLDkuMTAzNzM5MTIgMiw5LjEwMzczOTEyIEMxLjQ0NzcxNTI1LDkuMTAzNzM5MTIgMSw5LjU1MTQ1NDM3IDEsMTAuMTAzNzM5MSBMMSwyOSBDMSwzMC4xMDQ1Njk1IDEuODk1NDMwNSwzMSAzLDMxIEwyMC40MjI0NjM4LDMxIEMyMC42NzQzODQxLDMxIDIwLjkxNzAyMjYsMzAuOTA0OTE3MyAyMS4xMDE4NzE4LDMwLjczMzc2MDcgQzIxLjUwNzExNjYsMzAuMzU4NTM0IDIxLjUzMTQ1MTEsMjkuNzI1ODM2OCAyMS4xNTYyMjQ1LDI5LjMyMDU5MiBMMi43MzM3NjA2Nyw5LjQyNDMzMTA5IFoiLz4KICA8L2c+Cjwvc3ZnPgo="/>
                                <p className="design">Style guide</p>
                                <p className="intro">Update theme throughout the application easily.</p>
                                <a href="https">
                                    See How
                                </a>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card className="features__attribute--flex">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMUNEQjlFIiByeD0iMyIvPgogICAgPHJlY3Qgd2lkdGg9IjExIiBoZWlnaHQ9IjExIiB4PSIyMCIgeT0iMjAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHg9IjEiIHk9IjEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4K"/>
                                <p className="design">Spacing</p>
                                <p className="intro">A better and controlled way of update spacing.</p>
                                <a href="https">
                                    See How
                                </a>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card className="features__attribute--flex">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjE2IiB4PSIyMCIgeT0iMTYiIGZpbGw9IiM0M0E0RkYiIHJ4PSIzIi8+CiAgICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMTEiIGZpbGw9IiM0M0E0RkYiIHJ4PSIzIi8+CiAgICA8cmVjdCB3aWR0aD0iMTEiIGhlaWdodD0iMTQiIHg9IjEiIHk9IjE3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+Cg=="/>
                                <p className="design">Responsive</p>
                                <p className="intro">Better control to make the app responsive.</p>
                                <a href="https">
                                    See How
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Features;