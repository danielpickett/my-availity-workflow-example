/* eslint-disable no-console */
import React from 'react';
import Analytics from '@availity/analytics';
import { avLogMessagesApiV2 } from '@availity/api-axios';
import { AvSplunkAnalytics } from '@availity/analytics-core';

const mySpecialValue = '123';

const splunkPlugin = new AvSplunkAnalytics(avLogMessagesApiV2, true);

const AnalyticsExample = (): JSX.Element => (
  <div className="AnalyticsExample">
    <Analytics plugins={[splunkPlugin]} recursive>
      <button
        type="button"
        onClick={() => console.log('Yay! You clicked a button!')}
        data-analytics-my-special-value={mySpecialValue}
        data-analytics-action="click"
      >
        Click me
      </button>
    </Analytics>
  </div>
);

export default AnalyticsExample;
