import useSWR from 'swr';
import { useRouter } from 'next/router';

import fetcher from '../../helpers/fetcher';
import JobDetails from '../../components/job-details/job-details';
import JobDetailsFooter from '../../components/job-details/job-details-footer';
import Layout from '../../components/layout/layout';
import utilStyles from '../../styles/utils.module.css';
import CompanyCard from '../../components/company-card/company-card';
import { useEffect, useState } from 'react';

const Job = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const [applyUrl, setApplyUrl] = useState('');

  useEffect(() => {
    if (data && data.how_to_apply) {
      setApplyUrl(
        data.how_to_apply.substring(
          data.how_to_apply.indexOf('="') + 2,
          data.how_to_apply.indexOf('">')
        )
      );
    }
  }, [data]);

  return (
    <Layout
      pageTitle='Job Details'
      headerChildren={
        !data || error ? null : <CompanyCard applyUrl={applyUrl} {...data} />
      }
      footerChildren={
        !data || error ? null : (
          <JobDetailsFooter
            applyUrl={applyUrl}
            company={data.company}
            title={data.title}
          />
        )
      }
    >
      <div
        className={utilStyles.contentContainer}
        style={{ maxWidth: 'var(--job-details-width)' }}
      >
        {error ? <h2 className={utilStyles.centeredText}>Failed</h2> : null}
        {!data ? (
          <h2 className={utilStyles.centeredText}>Loading...</h2>
        ) : (
          <JobDetails applyUrl={applyUrl} {...data} />
        )}
      </div>
    </Layout>
  );
};

export default Job;
