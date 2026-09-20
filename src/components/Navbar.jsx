function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <a className="text-xl font-bold">🎬 MovieExplorer</a>
      </div>
      <div className="flex-none">
        <a href="#movies" className="btn btn-primary">Movies</a>
      </div>
    </div>
  )
}

export default Navbar