
import React from 'react'
import Player from './Player';

import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';

type Props = WithStyles<typeof styles>;

const styles = createStyles({
  isActive: {
    position: 'absolute',
    bottom: '50px',
  },
  playerOne: {
    left: '50px',
  },
  playerTwo: {
    right: '50px',
  }

});

const Players: React.SFC<Props> = ({ classes }) => {
  return (
    <>
      <div className={`${classes.playerOne} ${classes.isActive}`}>
        <Player
          player={1}
        />
      </div>
      <div className={`${classes.playerTwo} ${classes.isActive}`}>
        <Player
          player={2}
        />
      </div>
    </>
  )
}

export default withStyles(styles)(Players)
