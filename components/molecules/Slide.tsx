import React from 'react'
import Photo from '../atoms/Photo'

interface Props {
    photo: string
}

const Slide : React.FC<Props> = ({photo}) => {
  return (
    <div><Photo photo={photo}/></div>
  )
}

export default Slide