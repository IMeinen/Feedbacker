import React, { useState, useEffect } from 'react';
import './pagination.css';
import { FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa';

function* range(start, end) {
  while (start < end) {
    yield start;
    start += 1;
  }
}

const PrevBtn = props => (
  <button type="button" {...props}>
    <FaChevronLeft color="#333333" />
  </button>
);

const NextBtn = props => (
  <button type="button" {...props}>
    <FaChevronRight color="#333333" />
  </button>
);

const Ellipsis = () => (
  <span className="ellipsis">
    <FaEllipsisH color="#333333" />
  </span>
);

const Pagination = ({ page, activePage: initialActivePage, onChange }) => {
  const [activePage, setActivePage] = useState(initialActivePage);

  useEffect(() => {
    onChange(activePage);
  }, [activePage]);
  const generatePages = () => {
    if (page <= 6) {
      const pages = Array.from(range(1, page + 1));
      return pages.map(page => (
        <button
          type="button"
          key={`btn-page-${page}`}
          className={page === activePage ? 'is-active' : ''}
          onClick={e => {
            e.target.focus();
            setActivePage(page);
          }}
        >
          {page}
        </button>
      ));
    }

    if (page - activePage <= 4) {
      const first = Array.from(range(page - 4, page + 1));

      return (
        <>
          <Ellipsis />
          {first.map(page => (
            <button
              type="button"
              className={page === activePage ? 'is-active' : ''}
              onClick={e => {
                e.target.focus();
                setActivePage(page);
              }}
            >
              {page}
            </button>
          ))}
        </>
      );
    }
    const first =
      activePage === 1
        ? Array.from(range(activePage, activePage + 3))
        : Array.from(range(activePage - 1, activePage + 2));
    const end = Array.from(range(page - 1, page + 1));

    return (
      <>
        {first.map(page => (
          <button
            type="button"
            className={page === activePage ? 'is-active' : ''}
            onClick={e => {
              e.target.focus();
              setActivePage(page);
            }}
          >
            {page}
          </button>
        ))}
        <Ellipsis />
        {end.map(page => (
          <button
            type="button"
            className={page === activePage ? 'is-active' : ''}
            onClick={e => {
              e.target.focus();
              setActivePage(page);
            }}
          >
            {page}
          </button>
        ))}
      </>
    );
  };

  return (
    <div className="pagination">
      <section className="btn-page btn-page--prev">
        <PrevBtn
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        />
      </section>
      <section className="btn-page btn-page--numbers">
        {generatePages()}
      </section>
      <section className="btn-page btn-page--next">
        <NextBtn
          disabled={activePage === page}
          onClick={() => setActivePage(activePage + 1)}
        />
      </section>
    </div>
  );
};

export default Pagination;
