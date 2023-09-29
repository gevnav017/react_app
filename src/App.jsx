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
            const featuredPup = puppies.find((pup)=> pup.id === featPupId)
            console.log(featuredPup)
            return (
              <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}> 
                {puppy.name} 
              </p>
            )
          })        
        }
      </div>
    </>
  )
}

export default App
