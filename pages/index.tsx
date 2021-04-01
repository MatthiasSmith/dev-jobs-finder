import Head from 'next/head';
import useSWR from 'swr';

import fetcher from '../helpers/fetcher';
import JobItem from '../components/job-item';

export default function Home() {
  const { data, error } = useSWR('/api/jobs', fetcher);

  return (
    <>
      <Head>
        <title>Search Jobs Listed on GitHub</title>
      </Head>
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
