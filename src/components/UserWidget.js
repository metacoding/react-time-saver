import React, {Component} from "react";
import * as PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import LockIcon from '@material-ui/icons/Lock';
import {bindActionCreators} from "redux";
import {signIn} from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Avatar} from "@material-ui/core";

class UserWidget extends Component {
  static propTypes = {
    authStateChanged: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  handleSignIn = () => {
    const {firebase, history, signIn} = this.props;
    signIn(firebase, history);
  };

  handleShowUserMenu = () => {
  };

  render() {
    const {user} = this.props;

    return (
      <React.Fragment>
        <Fab variant="extended" color="secondary" aria-label="Add"
             onClick={user ? this.handleShowUserMenu : this.handleSignIn}
             style={{textTransform: "none", background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
          {!user && (
            <React.Fragment>
              <LockIcon/><span style={{paddingLeft: 10}}>Sign In</span>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <Avatar alt={user.displayName} src={user.photoUrl}
                      style={{padding: 0, marginLeft: -12, marginRight: 10}}/>
              <div>{user.displayName}<br/><span  style={{fontSize: '8pt'}}>{user.email}</span></div>
            </React.Fragment>
          )}
        </Fab>
      </React.Fragment>

    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    firebase: state.firebase,
    user: state.auth ? state.auth.user : null
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signIn}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserWidget));
