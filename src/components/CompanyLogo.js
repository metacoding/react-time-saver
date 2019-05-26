import React from 'react';
import * as PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {withRouter} from "react-router-dom";

const styles = () => ({
  logo: {
    cursor: 'pointer',
    marginTop: 5,
  },
  companyName: {
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    marginTop: '5px',
    marginLeft: '5px',
  },
  toolbarTitle: {
    flex: 1,
  },
});

function CompanyLogo(props) {
  const { classes, companyName, iconName } = props;

  const gotoHome = () => {
    const {history} = props;
    history.push('/');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} onClick={gotoHome}>
        <Icon className={classes.logo}>{iconName}</Icon> <span className={classes.companyName}>{companyName}</span>
      </Typography>
    </React.Fragment>
  );
}

CompanyLogo.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.any,
  classes: PropTypes.object.isRequired,

  companyName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles)(CompanyLogo));
