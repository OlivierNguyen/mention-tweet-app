import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';
import './index.css';
import Layout from './layout/components/Layout';
import registerServiceWorker from './registerServiceWorker';

render(
    <StyleRoot>
        <Layout />
    </StyleRoot>,
    document.getElementById('root')
);
registerServiceWorker();
