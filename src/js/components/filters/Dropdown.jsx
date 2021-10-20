import "../../../styles/movies.scss";

export const Dropdown = ({ title, children }) => {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  return (
    <div>
      <a
        className="dropdown-button"
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
      >
        <p>{title}</p>
        <i class="fas fa-angle-down"></i>
      </a>

      {openDropdown && children}
    </div>
  );
};

export const DropdownMenu = () => {
  const MenuItem = ({ children }) => {
    return (
      <>
        <div>
          <a className="item">
            <input type="checkbox"></input>
            {children}
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="dropdown">
        <MenuItem>
          <p>Action</p>
        </MenuItem>
        <MenuItem>
          <p>Adventure</p>
        </MenuItem>
      </div>
    </>
  );
};
