import React from 'react'
import { Button } from '@material-ui/core'

interface ChildProps {
  color: string;
  onClick: (evt: React.MouseEvent) => void;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div id="my-test-id">
      <p>Hi there my color is {color}</p>
      { children }
      <Button variant="contained" color="secondary" onClick={onClick}>Click Me</Button>
    </div>
  )
}
