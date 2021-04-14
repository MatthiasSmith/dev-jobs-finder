import { useState } from 'react';

import utilStyles from '../styles/utils.module.css';
import styles from '../styles/home.module.css';
import getQueryParamString from '../helpers/get-query-param-string';
import Search from '../components/search/search';
import Layout from '../components/layout/layout';
import Button from '../components/button/button';
import JobList from '../components/job-list/job-list';

export default function Home() {
  const defaultUrl = '/api/jobs';
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [url, setUrl] = useState(defaultUrl);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const pages = [];

  const handleFetch = (numItems) => {
    setShowLoadMore(numItems === 50);
    setIsFetching(false);
  };

  for (let i = 1; i <= pageNum; i++) {
    pages.push(
      <JobList url={url} pageNum={i} key={i} onDataLoaded={handleFetch} />
    );
  }

  const addPage = () => {
    setPageNum(pageNum + 1);
    setIsFetching(true);
  };

  const formatSearchUrl = () => {
    let newUrl = defaultUrl;
    newUrl += searchTerm.trim().length
      ? getQueryParamString(newUrl, 'search', searchTerm.trim())
      : '';
    newUrl += location.trim().length
      ? getQueryParamString(newUrl, 'location', location.trim())
      : '';
    newUrl += isFullTime
      ? getQueryParamString(newUrl, 'full_time', 'true')
      : '';
    setIsFetching(true);
    setUrl(newUrl);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setLocation('');
    setIsFullTime(false);
    setPageNum(1);
    setUrl(defaultUrl);
  };

  const changeTitle = (event) => {
    setSearchTerm(event.target.value);
    setPageNum(1);
  };

  const changeLocation = (event) => {
    setLocation(event.target.value);
    setPageNum(1);
  };

  const changeFullTime = () => {
    setIsFullTime(!isFullTime);
    setPageNum(1);
  };

  return (
    <Layout
      pageTitle='Find Dev Jobs'
      headerChildren={
        <Search
          title={searchTerm}
          location={location}
          isFullTime={isFullTime}
          onChangeTitle={changeTitle}
          onChangeLocation={changeLocation}
          onChangeIsFullTime={changeFullTime}
          onSearch={formatSearchUrl}
          onClear={clearFilters}
        />
      }
      footerChildren={
        <div
          className={`${utilStyles.textAlignCenter} ${utilStyles.textSm} ${utilStyles.textColorSecondary}`}
        >
          © Copyright {new Date().getFullYear()}
        </div>
      }
    >
      <div
        className={`${utilStyles.contentContainer} ${utilStyles.maxSiteWidth}`}
      >
        <h1 className={utilStyles.srOnly}>
          Find Dev Jobs Using GitHub's Jobs API
        </h1>
        {pages}
        {showLoadMore && !isFetching && (
          <Button
            primary='true'
            className={styles.loadMoreButton}
            onClick={addPage}
          >
            Load more
          </Button>
        )}
      </div>
    </Layout>
  );
}
