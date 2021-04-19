import utilStyles from '../../styles/utils.module.css';
import styles from './filters.module.css';
import Button from '../button/button';
import Input from '../input/input';
import Checkbox from '../checkbox/checkbox';

const Filters = ({
  isFullTime,
  location,
  filtersVisible,
  handleChangeLocation,
  handleChangeIsFullTime,
  handleClearFilters,
  handleSubmit,
}) => {
  return (
    <div
      className={`${styles.filters} ${
        filtersVisible ? styles.filtersVisible : ''
      }`}
    >
      <ul>
        <li className={`${utilStyles.flexRow} ${utilStyles.alignCenter}`}>
          <Input
            icon={
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                height='32px'
                viewBox='0 0 24 24'
                width='32px'
                fill='#00a1ff'
                focusable='false'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
            }
            aria-label='Search by title, company, expertise...'
            type='search'
            placeholder='Search by location'
            value={location}
            onChange={handleChangeLocation}
          />
        </li>
        <li className={`${utilStyles.flexRow} ${utilStyles.alignCenter}`}>
          <Checkbox
            type='checkbox'
            id='fullTime'
            name='fullTime'
            checked={isFullTime}
            onChange={handleChangeIsFullTime}
            className={`${styles.checkboxMargin}`}
            label='Full Time Only'
          />
        </li>
        <li
          className={`${utilStyles.flexRow} ${utilStyles.alignCenter} ${utilStyles.flexEnd}`}
        >
          <Button type='button' onClick={handleClearFilters} secondary={true}>
            Clear Filters
          </Button>
          <Button
            type='button'
            onClick={handleSubmit}
            primary={true}
            className={utilStyles.ml1}
          >
            Apply Filters
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
