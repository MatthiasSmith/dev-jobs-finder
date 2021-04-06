import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import fetcher from '../../helpers/fetcher';
import JobDetails from '../../components/job-details';

const Job = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  console.log(data);
  return (
    <>
      <Head>
        <title>Job Details</title>
      </Head>
      <main>
        {error ? <div>Failed</div> : null}
        {!data ? (
          <div>Loading...</div>
        ) : (
          <JobDetails {...data} />
        )}
      </main>
    </>
  );
};

export default Job;
