import React from 'react'
import importImages from '../utils/ImportImages'

function Accessory({ changeAccesory }) {
  const images = importImages(
    require.context('../images/accessories', false, /\.png/)
  )
  const accessories = ['headphone.png', 'earings.png', 'flower.png', 'glasses.png']
  return (
    <div className='grid-3x3-buttons'>
      {
        accessories.map(
          accessory => <button key={accessory} onClick={() => changeAccesory(images[accessory])}>
            {accessory.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Accessory
