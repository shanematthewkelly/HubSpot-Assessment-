import "../../../styles/movies.scss";

export const Search = ({ children, setSearchMovies }) => {

  return (
    <div className="search-block">
      <input 
        className="search-field" 
        type="search" 
        onChange={(e) => setSearchMovies(e.currentTarget.value.toLowerCase())}>

        </input>
      {children}
    </div>
  );
};
