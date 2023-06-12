import React from 'react'

function NameList() {
    const names = ['John ','Malcom','Richard','Toto','Twitter']
  return (
    <div>
        {/* <h1>{names [0]}</h1>
        <h1>{names [1]}</h1>
        <h1>{names [2]}</h1> */}

       {names.map(name => <h2>{name}</h2>)}     {/* afficher l'array */}
      
    </div>
  )
}

export default NameList