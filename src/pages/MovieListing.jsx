import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MovieListing() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] p-6">
        <h1 className="text-3xl font-bold">Movie Listing Page</h1>
        <p>This is where the movie grid and search will go.</p>
      </div>
      <Footer />
    </div>
  )
}

export default MovieListing