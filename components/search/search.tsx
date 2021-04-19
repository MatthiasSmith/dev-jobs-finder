import { useEffect, useState } from 'react';

import Input from '../input/input';
import Button from '../button/button';
import styles from './search.module.css';
import utilStyles from '../../styles/utils.module.css';
import Filters from './filters';
import Checkbox from '../checkbox/checkbox';

const Search = ({
  title,
  location,
  isFullTime,
  onChangeTitle,
  onChangeLocation,
  onChangeIsFullTime,
  onSearch,
  onClear,
}: {
  title: string;
  location: string;
  isFullTime: boolean;
  onChangeTitle: Function;
  onChangeLocation: Function;
  onChangeIsFullTime: Function;
  onSearch: Function;
  onClear: Function;
}) => {
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(
    () => setIsSmScreen(document.documentElement.clientWidth < 629),
    []
  );

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

  const handleClearFilters = () => {
    onClear();
  };

  return (
    <div
      className={`${utilStyles.maxSiteWidth} ${utilStyles.contentContainer}`}
    >
      <form className={styles.searchForm}>
        <div
          className={`${styles.searchBarContainer} ${utilStyles.flexRow} ${utilStyles.alignCenter}`}
        >
          <Input
            icon={
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                height='30px'
                viewBox='0 0 24 24'
                width='30px'
                className={`${styles.desktopSearchIcon} ${utilStyles.hiddenSm}`}
                focusable='false'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
              </svg>
            }
            aria-label='Search by title, company, expertise...'
            type='search'
            name='search'
            placeholder={
              isSmScreen
                ? 'Search by title, company...'
                : 'Search by title, company, expertise...'
            }
            inputClassNames={styles.searchInput}
            className={utilStyles.flex}
            value={title}
            onChange={handleChangeTitle}
          />
          <Input
            icon={
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                height='30px'
                viewBox='0 0 24 24'
                width='30px'
                fill='#00a1ff'
                focusable='false'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
            }
            aria-label='Search by location'
            type='search'
            placeholder='Search by location'
            value={location}
            onChange={handleChangeLocation}
            inputClassNames={styles.locationInputContainer}
            className={utilStyles.hiddenSm}
          />
          <div className={`${utilStyles.hiddenSm}`}>
            <Checkbox
              type='checkbox'
              id='fullTime'
              name='fullTime'
              checked={isFullTime}
              onChange={handleChangeIsFullTime}
              label='Full Time'
            />
          </div>
          <Button
            type='button'
            title={filtersVisible ? 'hide extra filters' : 'show extra filters'}
            onClick={toggleFilterVisibility}
            className={`${styles.filterButton} ${
              filtersVisible ? styles.inverted : ''
            }`}
            icon={true}
          >
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              enableBackground='new 0 0 24 24'
              height='30px'
              viewBox='0 0 24 24'
              width='30px'
              className={styles.filterIcon}
              focusable='false'
            >
              <g>
                <path d='M0,0h24 M24,24H0' fill='none' />
                <path d='M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z' />
                <path d='M0,0h24v24H0V0z' fill='none' />
              </g>
            </svg>
          </Button>
          <Button
            type='submit'
            title='search'
            onClick={handleSubmit}
            className={`${utilStyles.btn} ${styles.searchButton}`}
            icon={true}
          >
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              height='30px'
              viewBox='0 0 24 24'
              width='30px'
              fill='#FFFFFF'
              className={styles.mobileSearchIcon}
              focusable='false'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
            </svg>
            <span className={`${utilStyles.hiddenSm}`}>Search</span>
          </Button>
        </div>
        {
          <Filters
            handleChangeIsFullTime={handleChangeIsFullTime}
            handleChangeLocation={handleChangeLocation}
            handleClearFilters={handleClearFilters}
            handleSubmit={handleSubmit}
            location={location}
            isFullTime={isFullTime}
            filtersVisible={filtersVisible}
          />
        }
      </form>
    </div>
  );
};

export default Search;
