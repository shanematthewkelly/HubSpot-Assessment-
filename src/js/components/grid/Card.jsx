import { GridItem } from "./Grid";
import placeholder from "../../../assets/images/placeholder.jpg";

export const Card = ({ movie, i }) => {

    const ImageHandler = (e) => {
        if (e.target.src !== placeholder)
            e.target.src = placeholder;
    }

    return (
        <GridItem key={i}>
            <img
                className="movie-image"
                src={movie.poster}
                onError={(e) => ImageHandler(e)} />
            <h1>{movie.title}</h1>
            <p>Genres: {movie.genre.join(', ')}</p>
        </GridItem>
    )
};