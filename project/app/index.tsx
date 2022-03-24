import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// import {OriginalApp} from './pages/OriginalApp';
// import {AnalyticsExample} from './pages/AnalyticsExample';
import { AnalyticsManualTrackingExample } from './pages/AnalyticsManualTrackingExample';
import './index.scss';

render(
  <Router basename="/">
    {/* <OriginalApp /> */}
    <AnalyticsManualTrackingExample />
  </Router>,
  document.querySelector('#root')
);
