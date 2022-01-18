import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import { createTheme } from './theme';
import routes, { renderRoutes } from './routes';
import store, { history } from './store';
import { Provider } from 'react-redux';

const App = () => {

  const theme = createTheme();

  return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>

            <ConnectedRouter history={history}>
                <GlobalStyles />
                {renderRoutes(routes)}
            </ConnectedRouter>
      </ThemeProvider>
      </Provider>
  );
};

export default App;
