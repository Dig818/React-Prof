import React from 'react'

const Child = ({name, age}) => {
  return(
    <div>
    <h2>Child page</h2>
    <p>My name is {name}</p>
    <p>I am {age} years old</p>
    </div>
  )
}

export default Child