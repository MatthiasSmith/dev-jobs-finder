import useSWR from 'swr';

import fetcher from '../helpers/fetcher';
import JobItem from '../components/job-item/job-item';
import Search from '../components/search/search';
import { useState } from 'react';

import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout/layout';

export default function Home() {
  const defaultUrl = '/api/jobs';
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const { data, error } = useSWR(url, fetcher);

  const performSearch = () => {
    let newUrl = defaultUrl;
    if (title.length || location.length || isFullTime) {
      newUrl += '?';
    }
    newUrl += title.length ? `search=${title.trim()}` : '';
    newUrl += location.length
      ? newUrl.indexOf('?') > -1
        ? `&location=${location.trim()}`
        : `location=${location.trim()}`
      : '';
    newUrl += isFullTime
      ? newUrl.indexOf('?') > -1
        ? '&full_time=true'
        : 'full_time=true'
      : '';
    setUrl(newUrl);
  };

  const clearFilters = () => {
    setTitle('');
    setLocation('');
    setIsFullTime(false);
    setUrl(defaultUrl);
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeLocation = (event) => {
    setLocation(event.target.value);
  };

  const changeFullTime = () => {
    setIsFullTime(!isFullTime);
  };

  return (
    <Layout
      pageTitle='Find Dev Jobs'
      headerChildren={
        <Search
          title={title}
          location={location}
          isFullTime={isFullTime}
          onChangeTitle={changeTitle}
          onChangeLocation={changeLocation}
          onChangeIsFullTime={changeFullTime}
          onSearch={performSearch}
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
        {error ? (
          <h2 className={utilStyles.centeredText}>Failed to load</h2>
        ) : null}
        {!error && !data ? (
          <h2 className={utilStyles.centeredText}>Loading jobs...</h2>
        ) : !error && !data.length ? (
          <h2 className={utilStyles.centeredText}>
            No jobs match your search criteria.
          </h2>
        ) : (
          <ul>
            {data && data.length
              ? data.map((job) => <JobItem key={job.id} {...job} />)
              : null}
          </ul>
        )}
      </div>
    </Layout>
  );
}
