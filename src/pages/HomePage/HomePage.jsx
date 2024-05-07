import MovieList from "../../components/MovieList/MovieList";
import { useTrendMovies } from "../../components/hooks/useTrendMovies";
import "./HomePage.module.css"

const HomePage = () => {
	const films = useTrendMovies();
	return (
		<div className="homepage-container">
			<MovieList movies={films} />
		</div>
	);
};

export default HomePage;