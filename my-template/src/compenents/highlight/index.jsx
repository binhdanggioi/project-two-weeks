/* eslint-disable no-unused-vars */
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import codeString from './codeString';
import './highlight.scss';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function Highlight() {
    return (
        <div>
            <h2>Code the perfect design for each project using Atomize.</h2>
            <SyntaxHighlighter language="javascript" style={darcula}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
}

export default Highlight;