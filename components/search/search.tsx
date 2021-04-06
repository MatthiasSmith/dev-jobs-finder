import styles from './search.module.css';

const Search = ({
  searchTitle,
  onChange,
  onSearch,
}: {
  searchTitle: string;
  onChange: Function,
  onSearch: Function;
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <form className={styles.searchForm}>
      <input
        type='search'
        placeholder='Search by job title'
        className={styles.searchInput}
        value={searchTitle}
        onChange={handleChange}
      />
      <button
        type='submit'
        onClick={handleSubmit}
        className={styles.searchButton}
      >
        <svg
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
    </form>
  );
};

export default Search;
