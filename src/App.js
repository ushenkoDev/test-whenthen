import React, {createContext} from 'react';
import {makeStyles, MuiThemeProvider} from "@material-ui/core";

import theme from './utils/theme';
import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Box from "@material-ui/core/Box";
import usePosts from "./hooks/usePosts";

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    flexWrap: 'nowrap'
  }
}));

export const AppContext = createContext([{}, () => {}]);

function App() {
  const classes = useStyles();

  const { posts, categories, filter, setFilter } = usePosts();

  return (
    <AppContext.Provider value={{ posts, categories, filter, setFilter }}>
      <MuiThemeProvider theme={theme}>
        <Box display="flex" flexDirection="column" className={classes.container}>
          <Header />
          <Content />
          <Footer />
        </Box>
      </MuiThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
