import React from 'react'

import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';

type Props = WithStyles<typeof styles>;

const styles = createStyles({
  title: {
    position: 'relative',
    bottom: '20px',
  }
})

const Title: React.SFC<Props> = ({ classes }) => {
  return (
    <h1 className={classes.title}>
      Hi-Lo
    </h1>
  )
}

export default withStyles(styles)(Title)
