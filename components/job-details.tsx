import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';
import DateString from './date';

const JobDetails = ({
  company,
  company_logo,
  company_url,
  created_at,
  type,
  title,
  location,
  description,
  how_to_apply,
}: {
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  type: string;
  title: string;
  location: string;
  description: string;
  how_to_apply: string;
}) => {
  const applyUrl = how_to_apply.substring(
    how_to_apply.indexOf('="') + 2,
    how_to_apply.indexOf('">')
  );
  console.log(applyUrl);

  return (
    <>
      <article className={utilStyles.card}>
        <Link href='/'>
          <a>Back to all jobs</a>
        </Link>
        <div className='type'>
          <DateString dateString={created_at} /> - <span>{type}</span>
        </div>
        <h2>{title}</h2>
        <p>{location}</p>
        <div>
          <a
            href={applyUrl}
            rel='external noreferrer nofollow noopener'
            target='_blank'
          >
            Apply Now
          </a>
        </div>
        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </article>
      <style global jsx>{`
        .description ul {
          padding-left: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default JobDetails;
