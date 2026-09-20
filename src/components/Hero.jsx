import heroImg from '../assets/hero.png'

function Hero() {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Discover Movies</h1>
          <p className="mb-5">
            Explore and discover your favorite movies from around the world.
          </p>
          <a href="#movies" className="btn btn-primary">Explore Now</a>
        </div>
      </div>
    </div>
  )
}

export default Hero