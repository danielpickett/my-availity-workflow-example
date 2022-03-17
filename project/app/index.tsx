import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// import {OriginalApp} from './pages/OriginalApp';
import {AnalyticsExample} from './pages/AnalyticsExample';
import './index.scss';

render(
  <Router basename="/">
    {/* <OriginalApp /> */}
    <AnalyticsExample />
  </Router>,
  document.querySelector('#root')
);
