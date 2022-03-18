import React from 'react'
import importImages from '../utils/ImportImages'

function Neck({ changeNeck }) {
  const images = importImages(
    require.context('../images/neck', false, /\.png/)
  )
  const necks = ['default.png', 'bend-backward.png', 'bend-forward.png', 'thick.png',]
  return (
    <div className='grid-3x3-buttons'>
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
