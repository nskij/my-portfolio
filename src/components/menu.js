import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#94D0C9' }, // Purple and green play nicely together.
    secondary: { main: '#3659A7' }, // This is just green.A700 as hex.
  },
});

function SimpleTabs() {
const [value, setValue] = React.useState(0);

function handleChange(event, newValue) {
  setValue(newValue);
}

  return(
<ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Top" />
          <Tab label="About" />
          <Tab label="Works" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
    </ThemeProvider>
  );
}

export default SimpleTabs;