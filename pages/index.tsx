import Head from 'next/head';
import useSWR from 'swr';

import fetcher from '../helpers/fetcher';
import JobItem from '../components/job-item';
import Header from '../components/header/header';
import Search from '../components/search/search';
import { useState } from 'react';

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
    <>
      <Head>
        <title>jobfinder | Find tech jobs</title>
      </Head>
      <Header>
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
      </Header>
      <main>
        {error ? <div>Failed to load</div> : null}
        {!data ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.map((job) => (
              <JobItem key={job.id} {...job} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
