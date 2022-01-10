import React from 'react'
import importImages from '../ImportImages'

function Background({ changeBackground }) {
  const images = importImages(
    require.context('../assets/alpaca/backgrounds', false, /\.png/)
  )
  const backgroundImages = [ 
    'blue50.png', 'blue60.png', 'blue70.png',
    'darkblue30.png', 'darkblue50.png', 'darkblue70.png', 
    'green50.png', 'green60.png', 'green70.png', 
    'grey40.png', 'grey70.png', 'grey80.png', 
    'red50.png', 'red60.png', 'red70.png', 
    'yellow50.png', 'yellow60.png', 'yellow70.png', 
  ]
  return (
    <div>
      <h4>Background</h4>
      {
        backgroundImages.map(
          bg => <button key={bg} onClick={() => changeBackground(images[bg])}>
            {bg.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Background
