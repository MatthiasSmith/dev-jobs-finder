import styles from './search.module.css';
import utilStyles from '../../styles/utils.module.css';
import { useState } from 'react';

const Search = ({
  title,
  location,
  isFullTime,
  onChangeTitle,
  onChangeLocation,
  onChangeIsFullTime,
  onSearch,
}: {
  title: string;
  location: string;
  isFullTime: boolean;
  onChangeTitle: Function;
  onChangeLocation: Function;
  onChangeIsFullTime: Function;
  onSearch: Function;
}) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  const handleChangeTitle = (event) => {
    onChangeTitle(event);
  };

  const handleChangeLocation = (event) => {
    onChangeLocation(event);
  };

  const handleChangeIsFullTime = () => {
    onChangeIsFullTime();
  };

  const toggleFilterVisibility = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <form className={styles.searchForm}>
      <input
        type='search'
        placeholder='Search by title'
        className={`${utilStyles.input} ${utilStyles.flex}`}
        value={title}
        onChange={handleChangeTitle}
      />
      <button
        type='button'
        title={filtersVisible ? 'hide extra filters' : 'show extra filters'}
        onClick={toggleFilterVisibility}
        className={`${utilStyles.btn} ${styles.filterButton}`}
      >
        <svg
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 24 24'
          height='30px'
          viewBox='0 0 24 24'
          width='30px'
          fill='rgba(0, 0, 0, .60)'
        >
          <g>
            <path d='M0,0h24 M24,24H0' fill='none' />
            <path d='M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z' />
            <path d='M0,0h24v24H0V0z' fill='none' />
          </g>
        </svg>
      </button>
      <button
        type='submit'
        title='search'
        onClick={handleSubmit}
        className={`${utilStyles.btn} ${styles.searchButton}`}
      >
        <svg
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          height='30px'
          viewBox='0 0 24 24'
          width='30px'
          fill='#FFFFFF'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
        </svg>
      </button>
      {filtersVisible ? (
        <div className={styles.filters}>
          <hr />
          <ul>
            <li className={`${utilStyles.flexRow} ${utilStyles.alignCenter}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='30px'
                viewBox='0 0 24 24'
                width='30px'
                fill='#00a1ff'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
              <input
                type='search'
                placeholder='Filter by location'
                className={utilStyles.input}
                value={location}
                onChange={handleChangeLocation}
              />
            </li>
            <li className={`${utilStyles.flexRow} ${utilStyles.alignCenter}`}>
              <input
                type='checkbox'
                id='fullTime'
                name='fullTime'
                checked={isFullTime}
                onChange={handleChangeIsFullTime}
              />
              <label htmlFor='fullTime'>Full Time</label>
            </li>
          </ul>
        </div>
      ) : null}
    </form>
  );
};

export default Search;
