import React from 'react'
import importImages from '../ImportImages'

function Neck({ changeNeck }) {
  const images = importImages(
    require.context('../assets/alpaca/neck', false, /\.png/)
  )
  const necks = ['default.png', 'bend-backward.png', 'bend-forward.png', 'thick.png',]
  return (
    <div>
      <h4>Neck</h4>
      {
        necks.map(
          neck => <button key={neck} onClick={() => changeNeck(images[neck])}>
            {neck.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Neck
