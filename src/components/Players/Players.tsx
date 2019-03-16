
import React from 'react'
import Player from './Player';

import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';

interface PlayersProps {
  playerOnePoints: number,
  playerTwoPoints: number,
}

type Props = WithStyles<typeof styles> & PlayersProps;

const styles = createStyles({
  container: {
    display: 'flex',
  },
  isActive: {
    position: 'relative',
    bottom: '50px',
  },
  playerOne: {
    right: '150px',
  },
  playerTwo: {
    left: '150px',
  }
});

const Players: React.SFC<Props> = ({ classes, playerOnePoints, playerTwoPoints }) => {
  return (
    <div className={classes.container}>
      <span className={`${classes.playerOne} ${classes.isActive}`}>
        <Player
          player={1}
          points={playerOnePoints}
        />
      </span>
      <span className={`${classes.playerTwo} ${classes.isActive}`}>
        <Player
          player={2}
          points={playerTwoPoints} 
        />
      </span>
    </div>
  )
}

export default withStyles(styles)(Players)
