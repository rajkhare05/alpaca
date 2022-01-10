import React from 'react'
import importImages from '../ImportImages'

function Accessory({ changeAccesory }) {
  const images = importImages(
    require.context('../assets/alpaca/accessories', false, /\.png/)
  )
  const accessories = ['headphone.png', 'earings.png', 'flower.png', 'glasses.png']
  return (
    <div>
      <h4>Accessory</h4>
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
