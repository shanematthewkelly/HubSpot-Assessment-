import { Grid, GridItem } from "./components/grid/Grid";
import { Layout } from "./components/grid/Layout";
import placeholder from '../assets/images/placeholder.jpg';
import { Filters } from "./components/filters/Filters";

const Index = () => {
    return (
        <>
            <Layout>
                <Filters />
                <Grid cols={3}>
                    <GridItem>
                        <img className="movie-image" src={placeholder} />
                        <h1>The Other Guys (2010)</h1>
                        <p>Genres: Action, Adventure</p>
                    </GridItem>
                    <GridItem>
                    <img className="movie-image" src={placeholder} />
                        <h1>The Other Guys (2010)</h1>
                        <p>Genres: Action, Adventure</p>
                    </GridItem>
                    <GridItem>
                    <img className="movie-image" src={placeholder} />
                        <h1>The Other Guys (2010)</h1>
                        <p>Genres: Action, Adventure</p>
                    </GridItem>
                    <GridItem>
                    <img className="movie-image" src={placeholder} />
                        <h1>The Other Guys (2010)</h1>
                        <p>Genres: Action, Adventure</p>
                    </GridItem>
                </Grid>
            </Layout>
        </>
    );
};

const element = document.querySelector("#movies");
ReactDOM.render(<Index />, element);
