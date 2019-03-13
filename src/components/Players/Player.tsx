import React from 'react'

interface PlayerProps {
  player: number,
  points: number,
}

const Player: React.SFC<PlayerProps> = ({ player, points }) => {
  return (
    <div>
      Player {player}
      <br />
      Points: {points}
    </div>
  )
}

export default (Player)
