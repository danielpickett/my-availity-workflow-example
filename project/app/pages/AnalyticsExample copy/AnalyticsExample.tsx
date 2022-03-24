/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import React, { useMemo } from 'react';
import Analytics from '@availity/analytics';
import { Button } from 'reactstrap';
import { avLogMessagesApiV2 } from '@availity/api-axios';
import { AvSplunkAnalytics } from '@availity/analytics-core';
import { useLocation } from 'react-router-dom';

const splunkPlugin = new AvSplunkAnalytics(avLogMessagesApiV2, true);

const App = () => {
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  const spaceId = queryParams.get('spaceId');

  return (
    <Analytics plugins={[splunkPlugin]}>
      <div className="container" data-analytics-app-name="app">
        <a
          onClick={(e) => e.preventDefault()}
          href="/somewhere-nice"
          data-analytics-action="click"
          data-analytics-event-name="linking"
        >
          Click me!
        </a>
      </div>
      <div data-analytics-space-id={spaceId}>
        <Button type="button" data-analytics-action="click" data-analytics-my-special-value="123">
          MyButton
        </Button>
      </div>
    </Analytics>
  );
};

export default App;
