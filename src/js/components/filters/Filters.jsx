import "../../../styles/movies.scss";
import { Grid, GridItem } from "../grid/Grid";
import { Dropdown, DropdownMenu } from "./Dropdown";
import { MoviesBooks } from "./MoviesBooks";
import { Search } from "./Search";

export const Filters = ({
  genreFilter,
  yearFilter,
  movies,
  setSearchMovies,
  setGenreFilter,
  setYearFilter,
  setIsMovieBook,
  isMovieBook
}) => {
  // A more practical approach in a real-world scenario
  // would be to modify the API to send the 'Genres' and 'Years'
  // in their own object, instead of having to loop through nested arrays using sets.
  const [genres, setGenres] = React.useState([]);
  const [years, setYears] = React.useState([]);

  React.useEffect(() => {
    const allGenres = new Set();
    const allYears = new Set();

    movies.forEach((movie) => {
      // Loop through 'Genres' array and add new entries to the set
      movie.genre.forEach((genre) => {
        allGenres.add(genre);
      });
      // Add new 'Years' to set
      allYears.add(movie.year);
    });
    // Update 'Genres' and 'Years' in state
    setGenres(Array.from(allGenres));
    setYears(Array.from(allYears));
  }, [movies]);

  return (
    <div className="filters">
      <Grid cols={2}>
        <GridItem>
          <div className="filters-block">

            <Dropdown title="Genre">
              <DropdownMenu
                genreFilter={genreFilter}
                filterArrayGenre={genres}
                setFilter={setGenreFilter} />
            </Dropdown>

            <Dropdown title="Year">
              <DropdownMenu
                yearFilter={yearFilter}
                filterArrayYear={years}
                setFilter={setYearFilter} />
            </Dropdown>
          </div>

          <div className="radios">

            <MoviesBooks
              isMovieBook={isMovieBook}
              title="Movies"
              type="movie"
              setIsMovieBook={setIsMovieBook} />

            <MoviesBooks
              isMovieBook={isMovieBook}
              title="Books"
              type="book"
              setIsMovieBook={setIsMovieBook} />
          </div>

        </GridItem>
        <GridItem>
          <Search
            setSearchMovies={setSearchMovies}>
            <h1 onClick={(_) => {
              setGenreFilter([]);
              setYearFilter([]);
              setIsMovieBook("");
              }}>Clear Filters</h1>
          </Search>
        </GridItem>
      </Grid>
    </div>
  );
};
