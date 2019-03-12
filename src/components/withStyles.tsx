import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SettingsIcon from '@material-ui/icons/Settings';

type Props = WithStyles<typeof styles>;

const styles = (theme: Theme) => createStyles({
  changeWorksheetContainer: {
    maxWidth: 250,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  footer: {
    bottom: 0,
    top: 'auto',
  },
  toolbar: {
    alignItems: 'center',
    color: theme.palette.common.white,
    height: 50,
    justifyContent: 'space-between',
    minHeight: 50,
    padding: '0 4px',
  },
});

const Footer: React.SFC<Props> = ({ classes, children }) => {
  return(
    <AppBar
      position="fixed"
      color="primary"
      className={classes.footer}
    >
      <Toolbar
        className={classes.toolbar}
        disableGutters
      >
        <div
          className={classes.changeWorksheetContainer}
        >
          { children }
        </div>
        <IconButton
          color="inherit"
          onClick={() => ({})}
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Footer);