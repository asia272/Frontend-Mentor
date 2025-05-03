import { useState } from 'react'
import './App.css'
import RatingInput from './components/RatingInput';
import RatingResult from './components/RatingResult';

function App() {

  let [isRating, setIsRating] = useState(null);
  return (
    <>
      <main>
        {isRating ?
          <RatingResult isRating={isRating} /> :
          <RatingInput setIsRating={setIsRating} />
        }
      </main>


    </>
  )
}

export default App
