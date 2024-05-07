import axios from "axios";

export const fetchMovieReviews = async movieId => {
	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
		params: { language: "en-US" },
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmIzZWQ5YjE0MDk4ODFlNWM4YTIwYjhiYjIzZTdiYyIsInN1YiI6IjY0N2EzNzhmMGUyOWEyMDExNmFjM2FmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dE0z1_l67yK1oA-lkZj4iKHTCpMoEcYq9w-JhEAtZ0A",
		},
	};

	const { data } = await axios.request(options);
	return data;
};