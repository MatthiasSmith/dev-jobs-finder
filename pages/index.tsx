import Head from 'next/head';
import useSWR from 'swr';

import fetcher from '../helpers/fetcher';
import JobItem from '../components/job-item';
import Header from '../components/header/header';
import Search from '../components/search/search';
import { useState } from 'react';

export default function Home() {
  const [searchTitle, setSearchTitle] = useState('');
  const [url, setUrl] = useState('/api/jobs');
  const { data, error } = useSWR(url, fetcher);

  const handleSearch = () => {
    let newUrl = url;
    newUrl = searchTitle.length
      ? (newUrl += `?search=${searchTitle}`)
      : newUrl;
    setUrl(newUrl);
  };

  const handleSearchChange = (event) => {
    setSearchTitle(event.target.value);
  };

  return (
    <>
      <Head>
        <title>jobfinder | Find tech jobs</title>
      </Head>
      <Header>
        <Search
          searchTitle={searchTitle}
          onChange={handleSearchChange}
          onSearch={handleSearch}
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
