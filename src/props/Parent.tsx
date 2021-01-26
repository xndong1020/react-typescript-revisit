import React from 'react'
import { Child } from './Child'

const Temp: React.FC = () => {
  return (
    <div>
      I am a children
    </div>
  )
}

const Parent: React.FC = () => {
  return (
    <Child color="red" onClick={(event: React.MouseEvent) => console.log('aaaa')}>
      <Temp />
    </Child>
  )
}

export default Parent
