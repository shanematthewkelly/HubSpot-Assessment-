import "../../../styles/movies.scss";

export const MoviesBooks = ({ title, type, setIsMovieBook, isMovieBook }) => (
  <div>
    <>
      <input
         type="radio" 
         name="radio"
         checked={isMovieBook === type}
         onChange={(_) => {
          setIsMovieBook(type);
      }}>
      </input>
      <label>{title}</label>
    </>
  </div>
);
