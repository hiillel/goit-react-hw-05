// MovieDetailsPage.jsx
import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiMovieDetails.js";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    movieDetails && (
      <div>
        <div className={css.wrap}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className={css.poster}
          />
          <Link to={backLinkRef.current} className={css.btnBack}>
            ◀ Go back
          </Link>
        </div>
        <h1>{movieDetails.title}</h1>
        <h2>Overview:</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to={`${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${movieId}/review`}>Review</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetailsPage;
