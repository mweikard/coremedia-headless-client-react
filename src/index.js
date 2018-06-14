// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Fragment from './components/headless/Fragment';
import { Fetch } from './components/headless/Fetch';
import ErrorBoundary from './containers/ErrorBoundary';
import theme from './styles/themes/default';

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
    <ThemeProvider theme={theme}>
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
                <Fragment data={data} fragmentType={show} viewType={view} params={parsedParams} />
              );
            }
            return null;
          }}
        </Fetch>
      </ErrorBoundary>
    </ThemeProvider>,
    item
  );
}
