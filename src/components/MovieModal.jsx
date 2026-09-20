function MovieModal({ show, onClose }) {
  if (!show) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <img
          src={show.image ? show.image.original : 'https://placehold.co/600x400?text=No+Image'}
          alt={show.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h3 className="font-bold text-2xl mb-2">{show.name}</h3>

        <p className="mb-2">
          ⭐ Rating: {show.rating?.average ?? 'N/A'} &nbsp;|&nbsp; 📅 Release: {show.premiered ?? 'N/A'}
        </p>

        {show.genres && show.genres.length > 0 && (
          <p className="mb-2">🎭 Genre: {show.genres.join(', ')}</p>
        )}

        <div
          className="text-sm opacity-80 mt-3"
          dangerouslySetInnerHTML={{ __html: show.summary || 'No summary available.' }}
        />

        <div className="modal-action">
          <button onClick={onClose} className="btn">Close</button>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  )
}

export default MovieModal