import React from 'react'

function Nose({ changeNose, nose }) {
  return (
    <div>
      <button key='onlyNose' onClick={() => changeNose(!nose)}>Nose</button>
    </div>
  )
}

export default Nose
