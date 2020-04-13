import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
	state = {
		movieName: "",
		isLoading: true
	};
	handleChange = e => {
		this.setState({
			movieName: e.target.value
		});
	};

	getMovies = async () => {
		const {
			data: {
				data: { movies }
			}
		} = await axios.get(
			"https://yts.mx/api/v2/list_movies.json?sort_by=rating"
		);
		this.setState({ movies, isLoading: false });
	};

	searchMovies = async () => {
		this.setState({ isLoading: true });
		const {
			data: {
				data: { movies }
			}
		} = await axios.get(
			"https://yts.mx/api/v2/list_movies.json?sort_by=rating&genre=action&page=2"
		);
		this.setState({ movies, isLoading: false });
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
				) : (
					<div>
						<input
							placeholder="이름"
							onChange={this.handleChange}
						/>
						<button onClick={this.searchMovies}>검색</button>

						<div>{this.state.movieName}</div>

						<div className="movies">
							{movies.map(movie => {
								return (
									<Movie
										key={movie.id}
										id={movie.id}
										year={movie.year}
										title={movie.title}
										summary={movie.summary}
										poster={movie.medium_cover_image}
										genres={movie.genres}
										rating={movie.rating}
									/>
								);
							})}
						</div>
					</div>
				)}
			</section>
		);
	}
}

export default Home;
