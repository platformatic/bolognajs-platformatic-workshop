import { useState, useEffect } from 'react'
import './App.css'

// If you did use different namesfor the service, this function names
// will be different
import { getMoviesServiceUpperMovies, setBaseUrl } from '../api/api.mjs'
setBaseUrl('http://127.0.0.1:3042')

function App () {
  const [movies, setMovies] = useState([])

  console.log('movies', movies)
  useEffect(() => {
    async function fetchMovies () {
      const movies = await getMoviesServiceUpperMovies({})
      setMovies(movies)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <>
        <h2>Uppercase Movies</h2>

        {
        movies.length === 0
          ? (
            <div>No movies yet</div>
            )
          : (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
            )
      }
      </>
    </>
  )
}

export default App
