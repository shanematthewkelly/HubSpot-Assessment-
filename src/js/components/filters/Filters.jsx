import "../../../styles/movies.scss";
import { Grid, GridItem } from "../grid/Grid";
import { Dropdown, DropdownMenu } from "./Dropdown";

export const Filters = () => {
  return (
    <div className="filters">
      <Grid cols={2}>
        <GridItem>
          <div className="filters-block">
            <Dropdown title="Genre">
              <DropdownMenu />
            </Dropdown>

            <Dropdown title="Year">
              <DropdownMenu />
            </Dropdown>
          </div>
          <div className="radios">
            <>
              <input type="radio"></input>
              <p>Movies</p>
            </>
            <>
              <input type="radio"></input>
              <p>Books</p>
            </>
          </div>
        </GridItem>
        <GridItem>
          <div className="search-block">
            <input className="search-field" type="search"></input>
            <h1>Clear Filters</h1>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};
