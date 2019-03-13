
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
    bottom: '200px',
  },
  playerOne: {
    left: '300px',
  },
  playerTwo: {
    right: '300px',
  }

});

const Players: React.SFC<Props> = ({ classes }) => {
  return (
    <>
      <div className={`${classes.playerOne} ${classes.isActive}`}>
        <Player
          player={1}
          points={2}
        />
      </div>
      <div className={`${classes.playerTwo} ${classes.isActive}`}>
        <Player
          player={2}
          points={32} 
        />
      </div>
    </>
  )
}

export default withStyles(styles)(Players)
