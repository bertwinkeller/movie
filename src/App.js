import {useEffect} from 'react'

//e68d7eeb

const API_URL = 'http://www.omdbapi.com?apikey=e68d7eeb'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json()

        console.log(data.Search)
    }


    useEffect(() => {

    searchMovies('Spiderman')
        
    }, [])




  return (
    <div>
        <h1>Hello</h1>
      
    </div>
  )
}

export default App
