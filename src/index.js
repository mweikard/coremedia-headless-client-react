// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import Fragment from './components/headless/Fragment';
import { Fetch } from './components/headless/Fetch';
import ErrorBoundary from './containers/ErrorBoundary';
import ThemeProvider from './components/styles/ThemeProvider';
import theme from './themes/default';

const elements = document.getElementsByTagName('cm-fragment');

const parseParams = (params: string): Object | void => {
  try {
    const parsed = JSON.parse(params);
    return parsed;
  } catch (error) {
    return;
  }
};

for (const item of elements) {
  const { id, show, view, params } = item.dataset;
  const parsedParams = params ? parseParams(params) : undefined;
  ReactDOM.render(
    <ErrorBoundary>
      <Fetch
        host="http://127.0.0.1:8080"
        tenantId="coremedia"
        siteId="caassiopeia-en-DE"
        fragmentType={show}
        contentId={id}
      >
        {({ pending, data, error }) => {
          if (pending) {
            return <span>Loading...</span>;
          } else if (error) {
            throw new Error(error);
          } else if (data) {
            return (
              <ThemeProvider theme={theme}>
                <Fragment data={data} fragmentType={show} viewType={view} params={parsedParams} />
              </ThemeProvider>
            );
          }
          return null;
        }}
      </Fetch>
    </ErrorBoundary>,
    item
  );
}
