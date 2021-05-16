import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{selected.Title} <span>({selected.Year})</span></h2>
				<p className="rating"><i className="fa fa-imdb"> Rating: {selected.imdbRating}</i></p>
				<div className="container-extra">
					<div className="img-col">
						<img src={selected.Poster} />
					</div>
					<div className="text-col">
						<p className="text">Genre: {selected.Genre}</p>
						<p className="text">Director: {selected.Director}</p>
						<p className="text">Writer: {selected.Writer}</p>
						<p className="text">Actors: {selected.Actors}</p>
						<p className="text">Awards: {selected.Awards}</p>
						<p className="text">BoxOffice: {selected.BoxOffice}</p>
						<p className="text">Runtime: {selected.Runtime}</p>
						<p className="text">Story:  {selected.Plot}</p>
					</div>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
