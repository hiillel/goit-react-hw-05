import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/apiMovieReviews";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={css.review}>
              <p className={css.author}>Author: {review.author}</p>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! No reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
