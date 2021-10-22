import { Grid } from "./components/grid/Grid";
import { Layout } from "./components/grid/Layout";
import { Filters } from "./components/filters/Filters";
import { baseURL } from "./globals";
import { Card } from "./components/grid/Card";

const Index = () => {
    const [movies, setMovies] = React.useState([]);
    const [searchMovies, setSearchMovies] = React.useState("");
    const [genreFilter, setGenreFilter] = React.useState([]);
    const [yearFilter, setYearFilter] = React.useState([]);
    const [isMovieBook, setIsMovieBook] = React.useState("");

    React.useEffect(() => {
        fetch(baseURL, {
            headers: { Accept: "Application/json" },
        })
            .then((res) => {
                res.json().then((data) => {
                    let sortedData = data["media"].sort((a, b) =>
                        a.title.localeCompare(b.title)
                    );
                    setMovies(sortedData);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredMovies = React.useMemo(() => {
        let byFilter = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchMovies)
        );

        if (genreFilter.length !== 0) {
            byFilter = byFilter.filter((movie) =>
                genreFilter.some(genre => movie.genre.includes(genre)));
        }

        if (yearFilter.length !== 0) {
            byFilter = byFilter.filter((movie) =>
                yearFilter.some(year => movie.year.includes(year)))
        }

        if (isMovieBook !== "") {
            byFilter = byFilter.filter((movie) => movie.type === isMovieBook);
        }

        return byFilter.map((movie, i) => <Card key={i} movie={movie} />);
    }, [movies, searchMovies, genreFilter, yearFilter, isMovieBook]);

    return (
        <Layout>
            <Filters
                yearFilter={yearFilter}
                genreFilter={genreFilter}
                movies={movies}
                setSearchMovies={setSearchMovies}
                setGenreFilter={setGenreFilter}
                setYearFilter={setYearFilter}
                setIsMovieBook={setIsMovieBook}
                isMovieBook={isMovieBook}
            />

            <Grid cols={3}>
                {!filteredMovies.length && <p>No results found in your search.</p>}
                {filteredMovies}
            </Grid>
        </Layout>
    );
};

const element = document.querySelector("#movies");
ReactDOM.render(<Index />, element);