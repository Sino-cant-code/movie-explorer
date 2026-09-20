import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieModal from '../components/MovieModal'

function MovieListing() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [selectedShow, setSelectedShow] = useState(null)

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setShows(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch shows:', err)
        setLoading(false)
      })
  }, [])

  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] p-6">
        <h1 className="text-3xl font-bold mb-6">Browse Movies</h1>

        <label className="input input-bordered flex items-center gap-2 mb-6 w-full max-w-md">
          🔍
          <input
            type="text"
            className="grow"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        {loading && <p>Loading shows...</p>}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredShows.map((show) => (
              <div key={show.id} className="card bg-base-100 shadow-md">
                <figure>
                  <img
                    src={show.image ? show.image.medium : 'https://placehold.co/210x295?text=No+Image'}
                    alt={show.name}
                    className="w-full h-72 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base">{show.name}</h2>
                  <p className="text-sm">
                    ⭐ {show.rating?.average ?? 'N/A'} • 📅 {show.premiered ? show.premiered.slice(0, 4) : 'N/A'}
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button
                      onClick={() => setSelectedShow(show)}
                      className="btn btn-sm btn-primary"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredShows.length === 0 && (
          <p className="text-center mt-10">No shows found matching "{query}"</p>
        )}
      </div>
      <Footer />

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  )
}

export default MovieListing