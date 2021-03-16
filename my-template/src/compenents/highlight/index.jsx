/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Avatar, Button, Badge } from 'antd';
import 'antd/dist/antd.css';
import { PlusCircleFilled, StarFilled, StarOutlined} from "@ant-design/icons";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import codeString from './codeString';
import './highlight.scss';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function Highlight() {
  const [size, setSize] = useState('large');
    return (
        <div className="code">

            <h2 className="h2">Code the perfect design for each project using Atomize.</h2>

            <SyntaxHighlighter language="javascript" style={darcula}>
                {codeString}
            </SyntaxHighlighter>

            <div className="code__absolute">
              <Card style={{ width: 300,borderRadius: '15px' }}>

                <div className="ab__price">
                  <h3>$1,410.16</h3>
                  <p className="pc">per month</p>
                </div>

                <div className="ab__payment">
                  <div className="ab__payment--pc">
                    <p>Payment card</p>
                    <p className="pc">Component</p>
                  </div>
                  <div className="ab__payment--rate">
                    <StarFilled className="icon-active" /><StarFilled className="icon-active" />
                    <StarFilled className="icon-active" /><StarFilled className="icon-active" /><StarOutlined />
                    <p className="pc">Rated 4.0/5</p>
                  </div>
                </div>

                <Button className="btn">Use this design system</Button>
              </Card>
              <Card style={{ width: 300,borderRadius: '15px',margin: '1rem 0' }}>
                <div className="ab__info" >
                  <Avatar className="avt" />
                  <p>Meagan Fisher</p>
                  <PlusCircleFilled style={{color: '#0284FE', cursor: 'pointer'}}/>
                </div>
              </Card>
              <Card style={{ width: 300,borderRadius: '15px',textAlign: 'center' }}>

                  <Badge dot offset={[-12,72]}>
                    <Avatar className="info" size={{xl: 80}} />
                  </Badge>

                  <p className="name">Meagan Fisher</p>
                  <p className="job">Engineering Manager</p>

                  <div className="btn__interactive">
                      <Button className="btn__interactive--follow" type="primary" shape="round">Follow
                            <svg viewBox="0 0 24 24">
                                <path fill="#FFFFFF"
                                    d="M11,11 L11,6 C11,5.44771525 11.4477153,5 12,5 C12.5522847,5 13,5.44771525 13,6 L13,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L13,13 L13,18 C13,18.5522847 12.5522847,19 12,19 C11.4477153,19 11,18.5522847 11,18 L11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L11,11 Z"/>
                            </svg>
                      </Button>
                      <Button className="btn__interactive--message" shape="round">Message
                            <svg viewBox="0 0 24 24">
                                <path fill="#4E5D78"
                                    d="M19,6 L5,6 L5,17.3419209 L7.3796773,15.3936192 C7.69417855,15.1361291 8.09061112,14.9951167 8.5,14.9951167 L19,14.9951167 L19,6 Z M19.65,16.9985025 L8.4,16.9985025 L4.47616596,20.2683642 C4.09431675,20.5865718 3.52680852,20.5349802 3.20860085,20.153131 C3.0738146,19.9913875 3,19.7875079 3,19.576965 L3,5.35 C3,4.60441559 3.60441559,4 4.35,4 L19.65,4 C20.3955844,4 21,4.60441559 21,5.35 L21,15.6485025 C21,16.3940869 20.3955844,16.9985025 19.65,16.9985025 Z"/>
                            </svg>
                      </Button>
                  </div>
              </Card>
            </div>
        </div>
    );
}

export default Highlight;