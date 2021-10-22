export const MenuItem = ({ data, itemFilter, setFilter }) => {

    const onFilterChange = (data) => {
        if (itemFilter.includes(data)) {
            setFilter(itemFilter.filter((g) => g !== data));
        } else {
            setFilter([...itemFilter, data]);
        }
    };

    return (
        <a className="item">
            <input
                type="checkbox"
                checked={itemFilter.includes(data)}
                onChange={(_) => {
                    onFilterChange(data);
                }}
            ></input>
            <p>{data}</p>
        </a>
    );
};
