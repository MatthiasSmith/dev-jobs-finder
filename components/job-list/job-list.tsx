import { useEffect, memo } from 'react';
import useSWR from 'swr';

import getQueryParamString from '../../helpers/get-query-param-string';
import fetcher from '../../helpers/fetcher';
import utilStyles from '../../styles/utils.module.css';
import JobItem from '../job-item/job-item';
import Loading from '../loading/loading';

const JobList = ({
  url,
  pageNum,
  onDataLoaded,
}: {
  url: string;
  pageNum: number;
  onDataLoaded: Function;
}) => {
  const { data, error } = useSWR(
    `${url}${getQueryParamString(url, 'page', pageNum)}`,
    fetcher
  );

  useEffect(() => data && onDataLoaded(data.length), [data]);

  if (error) {
    return (
      <h2
        className={`${
          pageNum === 1 ? utilStyles.centeredText : utilStyles.textAlignCenter
        }`}
      >
        Failed to load
      </h2>
    );
  }
  if (!data) {
    return (
      <Loading
        text='Loading Jobs...'
        className={`${
          pageNum === 1 ? utilStyles.centeredOnPage : utilStyles.textAlignCenter
        }`}
      />
    );
  }
  if (!data.length) {
    return (
      <h2 className={utilStyles.centeredText}>
        No jobs match your search criteria.
      </h2>
    );
  }

  return (
    <ul className={utilStyles.moveAndFadeIn}>
      {data.map((job) => (
        <JobItem key={job.id} {...job} />
      ))}
    </ul>
  );
};

export default memo(JobList);
