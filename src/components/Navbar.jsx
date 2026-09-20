import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">🎬 MovieExplorer</Link>
      </div>
      <div className="flex-none">
        <Link to="/movies" className="btn btn-primary">Movies</Link>
      </div>
    </div>
  )
}

export default Navbar