import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'

const GuestList: React.FC = () => {
  const [name, SetName] = useState<string>('')
  const [guests, setGuests]= useState<string[]>([])

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = evt.target.value
    SetName(name)
  }

  const onClick = () => {
    setGuests(prev => {
      return [...prev, name]
    })
    SetName('')
  }
  return (
    <div>
      <Typography variant="h3">
      Party Guest List:
      </Typography>
      <ul>
       {guests.map((guest, idx) => <li key={idx}>{guest}</li> )}
      </ul>

      <input type="text" value={name} onChange={onChange} />
      <Button variant="contained" color="primary" onClick={onClick}>Add Guest</Button>
    </div>
  )}

export default GuestList
