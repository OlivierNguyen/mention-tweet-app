import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Layout from './layout/components/Layout';
import registerServiceWorker from './registerServiceWorker';

render(<Layout />, document.getElementById('root'));
registerServiceWorker();
