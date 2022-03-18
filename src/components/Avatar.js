import React, { useState, useMemo } from 'react'

import mergeImages from 'merge-images'
import randomImageGenerator from '../utils/RandomImage'

// components
import Background from './Background.js'
import Ears from './Ears.js'
import Neck from './Neck.js'
import Hair from './Hair.js'
import Accessory from './Accessory.js'
import Eyes from './Eyes.js'
import Mouth from './Mouth.js'
import Leg from './Leg.js'
import '../css/Avatar.css'

// default alpaca parts
import blue50 from '../images/backgrounds/blue50.png'
import defaultNeck from '../images/neck/default.png'
import defaultEars from '../images/ears/default.png'
import defaultHair from '../images/hair/default.png'
import defaultNose from '../images/nose.png'
import defaultEyes from '../images/eyes/default.png'
import defaultMouth from '../images/mouth/default.png'
import headphone from '../images/accessories/headphone.png'
import defaultLeg from '../images/leg/default.png'

function Avatar() {

  const [background, setBackground] = useState(blue50)
  const [ears, setEars] = useState(defaultEars)
  const [neck, setNeck] = useState(defaultNeck)
  const [hair, setHair] = useState(defaultHair)
  const [eyes, setEyes] = useState(defaultEyes)
  const [mouth, setMouth] = useState(defaultMouth)
  const [accessory, setAccessory] = useState(headphone)
  const [leg, setLeg] = useState(defaultLeg)
  const [currentBtn, setCurrentBtn] = useState('')

  const getRandomImage = () => {
    const alpaca = randomImageGenerator()
    setBackground(alpaca.background)
    setEars(alpaca.ear)
    setNeck(alpaca.neck)
    setHair(alpaca.hair)
    setEyes(alpaca.eye)
    setMouth(alpaca.mouth)
    setAccessory(alpaca.accessory)
    setLeg(alpaca.leg)
  }

  const downloadImage = () => {
    const alpacaImage = document.querySelector('#alpaca-avatar')
    const link = document.createElement('a')
    link.download = 'alpaca.png'
    link.href = alpacaImage.src
    link.click()
  }

  const showOptions = (e) => {
    setCurrentBtn(e.target.name)
  }

  useMemo(() => {
    const parts = [
      { src: background },
      { src: ears },
      { src: neck },
      { src: defaultNose },
      { src: hair },
      { src: accessory },
      { src: eyes },
      { src: mouth },
      { src: leg },
    ]
    mergeImages(parts).then(avatar => document.querySelector('#alpaca-avatar').src = avatar)
  }, [background, ears, neck, hair, eyes, mouth, accessory, leg])

  return (
    <div className='container'>

      <div className='left-pane'>

        <img id='alpaca-avatar' alt="alpaca" />

        <div className='left-pane-buttons'>
          <button onClick={getRandomImage}>Random</button>
          <button onClick={downloadImage}>Download</button>
        </div>

      </div>

      <div className='right-pane'>
        <h3 id='subheading1'>ACCESSORIZE THE ALPACA'S</h3>
        <div className='box1'>
          <button onClick={showOptions} name='background'>Background</button>
          <button onClick={showOptions} name='hair'>Hair</button>
          <button onClick={showOptions} name='neck'>Neck</button>
          <button onClick={showOptions} name='accessory'>Accessory</button>
          <button onClick={showOptions} name='eyes'>Eyes</button>
          <button onClick={showOptions} name='leg'>Leg</button>
          <button onClick={showOptions} name='ears'>Ears</button>
          <button onClick={showOptions} name='mouth'>Mouth</button>
        </div>

        <div className='box2'>
          <h3>STYLE</h3>
          {
            (() => {
              switch (currentBtn) {

                case 'background':
                  return <Background changeBackground={newBackground => setBackground(newBackground)} />

                case 'hair':
                  return <Hair changeHair={newHair => setHair(newHair)} />

                case 'neck':
                  return <Neck changeNeck={newNeck => setNeck(newNeck)} />

                case 'accessory':
                  return <Accessory changeAccesory={newAccessory => setAccessory(newAccessory)} />

                case 'eyes':
                  return <Eyes changeEyes={newEyes => setEyes(newEyes)} />

                case 'leg':
                  return <Leg changeLeg={newLeg => setLeg(newLeg)} />

                case 'ears':
                  return <Ears changeEars={newEars => setEars(newEars)} />

                case 'mouth':
                  return <Mouth changeMouth={newMouth => setMouth(newMouth)} />

                default:
                  return <Background changeBackground={newBackground => setBackground(newBackground)} />
              }
            })()
          }
        </div>
      </div>
    </div>
  )
}

export default Avatar
