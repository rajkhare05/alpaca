import React, { useState } from 'react';
import mergeImages from 'merge-images';

// import default alpaca parts
import blue50 from '../assets/alpaca/backgrounds/blue50.png';
import defaultNeck from '../assets/alpaca/neck/default.png';
import defaultEars from '../assets/alpaca/ears/default.png';
import defaultHair from '../assets/alpaca/hair/default.png';
import defaultNose from '../assets/alpaca/nose.png';
import defaultEyes from '../assets/alpaca/eyes/default.png';
import defaultMouth from '../assets/alpaca/mouth/default.png';
import headphone from '../assets/alpaca/accessories/headphone.png';
import defaultLeg from '../assets/alpaca/leg/default.png';

// import components
import Background from './Background.js';
import Ears from './Ears.js'
import Neck from './Neck.js';
import Hair from './Hair.js';
import Accessory from './Accessory.js';
import Eyes from './Eyes.js';
import Mouth from './Mouth.js';
import Leg from './Leg.js';
// import Nose from './Nose.js'

function Avatar() {

  const avatarWidth = 520;
  const avatarHeight = 520;

  const [background, setBackground] = useState(blue50);
  const [ears, setEars] = useState(defaultEars);
  const [neck, setNeck] = useState(defaultNeck);
  const [hair, setHair] = useState(defaultHair);
  const [nose, setNose] = useState(true);
  const [eyes, setEyes] = useState(defaultEyes);
  const [mouth, setMouth] = useState(defaultMouth);
  const [accessory, setAccessory] = useState(headphone);
  const [leg, setLeg] = useState(defaultLeg);

  // let items = Object.keys(props).map(item => ({src: props[item]}));
  let items = [
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
  mergeImages(items).then(b64 => document.querySelector('img').src = b64);

  
  return (
    <div>
      <img alt="alpaca" width={avatarWidth} height={avatarHeight} />
      <Background changeBackground={newBackground => setBackground(newBackground)}></Background>
      <Ears changeEars={newEars => setEars(newEars)}></Ears>
      <Neck changeNeck={newNeck => setNeck(newNeck)}></Neck>
      {/* <Nose changeNose={() => setNose(!nose)} nose={nose}></Nose> */}
      <Hair changeHair={newHair => setHair(newHair)}></Hair>
      <Accessory changeAccesory={newAccessory => setAccessory(newAccessory)}></Accessory>
      <Eyes changeEyes={newEyes => setEyes(newEyes)}></Eyes>
      <Mouth changeMouth={newMouth => setMouth(newMouth)}></Mouth>
      <Leg changeLeg={newLeg => setLeg(newLeg)}></Leg>
    </div>
  )
}

export default Avatar
