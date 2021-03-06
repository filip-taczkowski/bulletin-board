
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NavBar.module.scss';

const Component = ({ className, title, isLogged }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar className={styles.bar}>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.menu}>
          {isLogged ?
            <div>
              <Button color="inherit">My posts</Button>
              <Button color="inherit">Logout</Button>
            </div>
            : <Button color="inherit" href="https://google.com" >Login</Button>
          }
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  isLogged: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};
