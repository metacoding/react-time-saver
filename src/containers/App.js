import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import SimpleGDPR from 'simple-gdpr';
import {withStyles} from '@material-ui/core/styles';

import 'simple-gdpr/dist/simplegdpr.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import * as Actions from "../actions";

import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Signup from "./SignUp";
import Home from "./Home";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {indigo, pink} from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden'
  },
  appFrame: {
    width: 360,
    height: 360,
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    marginBottom: theme.spacing.unit
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut
    })
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    })
  },
  snackbar: {
    position: 'absolute'
  },
  snackbarContent: {
    width: 360
  }
});


class App extends Component {

  state = {
    systemMessage: "Ready",
    systemMessageVisible: false,

    theme: {
      palette: {
        primary: pink,
        secondary: indigo,
        type: 'light'
      }
    }
  };

  onToggleTheme = () => {
    this.setState({isThemeLight: !this.state.isThemeLight});
  };

  handleClose = () => {
    this.setState({systemMessageVisible: false});
  };

  componentDidMount() {
    const notice = new SimpleGDPR({
      title: 'This website uses cookies.',
      link: './privacypolicy.html',
      theme: 'modern',
      icons: false,
      animation: 'slide',
      float: 'bottom-left',
      zIndex: 9999,
      callback: () => notice.close()
    });

    const gdprDialog = document.getElementById("sgdpr-box");
    gdprDialog.style.zIndex = '9999';
  }

  render() {
    const {systemMessageVisible, systemMessage, theme} = this.state;
    const {classes, classnames} = this.props;

    return (
      <MuiThemeProvider
        theme={createMuiTheme(theme)}
      >
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/signIn" component={SignIn}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/dashboard" component={Dashboard}/>
            </div>
          </Router>
          <Snackbar
            open={systemMessageVisible}
            autoHideDuration={4000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              className: classes.snackbarContent
            }}
            message={<span id="snackbar-fab-message-id">{systemMessage}</span>}
            action={
              <Button color="inherit" size="small" onClick={this.handleClose}>
                OK
              </Button>
            }
            className={classes.snackbar}
          />
        </div>
      </MuiThemeProvider>);
  }
}


function mapStateToProps(state) {
  return {
    firebase: state.firebase
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(App);
