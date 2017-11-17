import React, { Component } from 'react';

const Footer = () => {
    const S = {
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        signature: {
            color: '#efefef',
        },
        github: {
            width: 25,
            marginLeft: 10,
        },
    };

    return (
        <div style={S.container}>
            <div style={S.signature}>Olivier Nguyen @2017</div>
            <a href="https://github.com/OlivierNguyen/mention-tweet-app">
                <img
                    style={S.github}
                    alt="github"
                    src="/images/github-logo.png"
                />
            </a>
        </div>
    );
};

export default Footer;
