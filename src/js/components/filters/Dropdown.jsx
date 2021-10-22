import "../../../styles/movies.scss";
import { MenuItem } from './MenuItem';

export const Dropdown = ({ title, children }) => {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  return (
    <div className="dropdown-button">
      <a
        style={{ justifyContent: "space-between" }}
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
      >
        <p>{title}</p>
        <i className="fas fa-angle-down"></i>
      </a>
      {openDropdown && children}
    </div>
  );
};

export const DropdownMenu = ({
  filterArrayGenre = [],
  filterArrayYear = [],
  setFilter,
  genreFilter,
  yearFilter
}) => {

  const genres = filterArrayGenre.map((genre, i) => (
    <MenuItem
      key={i}
      itemFilter={genreFilter}
      data={genre}
      setFilter={setFilter}
    />
  ));

  const years = filterArrayYear.map((year, i) => (
    <MenuItem
      key={i}
      itemFilter={yearFilter}
      data={year}
      setFilter={setFilter}
    />
  ));

  return (
    <>
      <div className="dropdown">{genres.length === 0 ? years : genres}</div>
    </>
  );
};