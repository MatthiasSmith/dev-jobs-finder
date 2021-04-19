import Link from 'next/link';

import styles from './job-details.module.css';
import utilStyles from '../../styles/utils.module.css';
import buttonStyles from '../button/button.module.css';
import DateString from '../date/date';

const JobDetails = ({
  created_at,
  type,
  title,
  location,
  description,
  how_to_apply,
  applyUrl,
}: {
  created_at: string;
  type: string;
  title: string;
  location: string;
  description: string;
  how_to_apply: string;
  applyUrl: string;
}) => {
  return (
    <>
      <article
        className={`${styles.jobDetails} ${utilStyles.card} ${utilStyles.moveAndFadeIn}`}
      >
        <Link href='/'>
          <a
            className={`${utilStyles.noUnderline}
            ${utilStyles.textColorPrimary}
            ${utilStyles.textAlignRight}
            ${utilStyles.displayBlock}`}
          >
            ← Back to all jobs
          </a>
        </Link>
        <div
          className={`${utilStyles.flexRow} ${utilStyles.flexWrap} ${utilStyles.alignCenter}`}
        >
          <div className={`${styles.jobTitleContainer} ${utilStyles.mb1}`}>
            <div
              className={`${utilStyles.textColorSecondary} ${utilStyles.textSm}`}
            >
              <DateString dateString={created_at} /> - <span>{type}</span>
            </div>
            <h1
              className={`${utilStyles.headingLg} ${utilStyles.headingMargins}`}
            >
              {title}
            </h1>
            <p
              className={`${utilStyles.textColorSecondary} ${utilStyles.textSm}`}
            >
              {location}
            </p>
          </div>
          <a
            className={`${styles.applyLink}
            ${buttonStyles.btnLink}
            ${buttonStyles.filled}
            ${utilStyles.mb1}`}
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
        .description {
          margin-top: 0.75rem;
          overflow-x: scroll;
        }

        .description p:not(:last-of-type) {
          margin-bottom: 1rem;
        }

        .description h2 {
          font-size: 1.25rem;
          margin: 1.5rem 0 0.75rem;
        }

        .description ul,
        .description ol {
          padding-left: 1.5rem;
        }

        .description ul li,
        .description ol li {
          margin-bottom: 0.5rem;
        }

        .description ul li:last-of-type,
        .description ol li:last-of-type {
          margin-bottom: 1rem;
        }

        .description p {
          overflow-wrap: break-word;
        }

        .description a {
          overflow-wrap: anywhere;
        }

        .description a strong {
          font-weight: normal;
        }
      `}</style>
      <article className='how-to-apply'>
        <h2>How to apply</h2>
        <div dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
      </article>
      <style global jsx>{`
        .how-to-apply {
          background: var(--header-bg-gradient);
          border-radius: 0.4rem;
          box-shadow: var(--card-box-shadow);
          color: white;
          margin-top: 2rem;
          padding: 1.15rem;
        }

        .how-to-apply h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .how-to-apply p:not(:last-of-type) {
          margin-bottom: 1rem;
        }

        .how-to-apply p {
          overflow-wrap: break-word;
        }

        .how-to-apply a {
          color: rgba(255, 255, 255, 0.84);
          font-size: 0.9rem;
          line-height: 1.2em;
          overflow-wrap: anywhere;
        }

        .how-to-apply ul,
        .how-to-apply ol {
          padding-left: 1.5rem;
        }

        .how-to-apply ul li,
        .how-to-apply ol li {
          margin-bottom: 0.5rem;
        }

        .how-to-apply ul li:first-of-type,
        .how-to-apply ol li:first-of-type {
          margin-top: 0.5rem;
        }

        .how-to-apply ul li:last-of-type,
        .how-to-apply ol li:last-of-type {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default JobDetails;
