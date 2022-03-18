import importImages from './ImportImages'

const accessory = importImages(require.context('../images/accessories', false, /\.png/))
const background = importImages(require.context('../images/backgrounds', false, /\.png/))
const ear = importImages(require.context('../images/ears', false, /\.png/))
const eye = importImages(require.context('../images/eyes', false, /\.png/))
const hair = importImages(require.context('../images/hair', false, /\.png/))
const leg = importImages(require.context('../images/leg', false, /\.png/))
const mouth = importImages(require.context('../images/mouth', false, /\.png/))
const neck = importImages(require.context('../images/neck', false, /\.png/))

const accessoryImages = ['headphone.png', 'earings.png', 'flower.png', 'glasses.png']
const backgroundImages = [
    'blue50.png', 'blue60.png', 'blue70.png',
    'darkblue30.png', 'darkblue50.png', 'darkblue70.png',
    'green50.png', 'green60.png', 'green70.png',
    'grey40.png', 'grey70.png', 'grey80.png',
    'red50.png', 'red60.png', 'red70.png',
    'yellow50.png', 'yellow60.png', 'yellow70.png',
]
const earImages = ['default.png', 'tilt-backward.png', 'tilt-forward.png']
const eyeImages = [
    'default.png', 'angry.png', 'naughty.png',
    'panda.png', 'smart.png', 'star.png'
]
const hairImages = [
    'default.png', 'bang.png', 'curls.png', 
    'elegant.png', 'quiff.png', 'short.png'
]
const legImages = [
    'default.png', 'bubble-tea.png',
    'cookie.png', 'game-console.png',
    'tilt-backward.png', 'tilt-forward.png'
]
const mouthImages = [
    'default.png', 'astonished.png',
    'eating.png', 'laugh.png', 'tongue.png'
]
const neckImages = ['default.png', 'bend-backward.png', 'bend-forward.png', 'thick.png']

const randomize = (max) => {
    return Math.floor(Math.random() * max)
}

/**
 * Returns an object of random alpaca parts
*/
const randomImageGenerator = () => {
    const alapcaParts = {}
    alapcaParts['accessory'] = accessory[accessoryImages[randomize(4)]]
    alapcaParts['background'] = background[backgroundImages[randomize(18)]]
    alapcaParts['ear'] = ear[earImages[randomize(3)]]
    alapcaParts['eye'] = eye[eyeImages[randomize(6)]]
    alapcaParts['hair'] = hair[hairImages[randomize(6)]]
    alapcaParts['leg'] = leg[legImages[randomize(6)]]
    alapcaParts['mouth'] = mouth[mouthImages[randomize(5)]]
    alapcaParts['neck'] = neck[neckImages[randomize(4)]]
    return alapcaParts
}

export default randomImageGenerator
