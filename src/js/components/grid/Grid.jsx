import '../../../styles/movies.scss';

export const Grid = ({ cols, children }) => (
    <section style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`}} className="css-grid">
        {children}
    </section>
);

export const GridItem = ({ children }) => (
    <div className="grid-item">
        {children}
    </div>
);
