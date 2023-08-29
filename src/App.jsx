import {puppyList} from './data.js'
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p onClick={() => {
              setFeatPupId(puppy.id)
            }} key={puppy.id}> {puppy.name} </p>
          })
        }

        <div>
          { featPupId && <p>{ featPupId }</p> }
        </div>
      </div>
    </>
  )
}

export default App
