import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MovieListing() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] p-6">
        <h1 className="text-3xl font-bold mb-6">Browse Movies</h1>

        {loading && <p>Loading shows...</p>}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shows.map((show) => (
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
                    <button className="btn btn-sm btn-primary">See Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default MovieListing