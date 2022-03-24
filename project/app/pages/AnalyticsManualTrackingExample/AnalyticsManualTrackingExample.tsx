/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import React from 'react';
import Analytics, { useAnalytics } from '@availity/analytics';

import { avLogMessagesApiV2 } from '@availity/api-axios';
import { AvSplunkAnalytics } from '@availity/analytics-core';

const splunkPlugin = new AvSplunkAnalytics(avLogMessagesApiV2, true);

const MyDeeplyNestedComponent = () => {
  const analytics = useAnalytics();

  const handleMouseOver = () => {
    analytics.trackEvent({ level: 'info', someValue: 'foo', otherValue: 'bar' });
  };

  return <div onMouseOver={handleMouseOver}>Tracking mouseover events on this div</div>;
};

const App = () => (
  <Analytics plugins={[splunkPlugin]}>
    <MyDeeplyNestedComponent />
  </Analytics>
);

export default App;
