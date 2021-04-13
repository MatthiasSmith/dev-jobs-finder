import Image from 'next/image';

import styles from './company-card.module.css';
import utilStyles from '../../styles/utils.module.css';
import buttonStyles from '../button/button.module.css';

const CompanyCard = ({
  company,
  company_logo,
  company_url,
}: {
  company: string;
  company_logo: string;
  company_url: string;
}) => {
  return (
    <div
      className={`${styles.companyCardContainer} ${utilStyles.contentContainer}`}
    >
      <article
        className={`${styles.companyCard}
      ${utilStyles.flexRow}
      ${utilStyles.flexWrap}
      ${utilStyles.alignCenter}
      ${utilStyles.justifyCenter}`}
      >
        <div className={styles.companyLogoContainer}>
          <Image
            src={company_logo}
            width={85}
            height={85}
            layout='intrinsic'
            objectFit='contain'
            alt={`Logo for ${company}.`}
          />
        </div>
        <div className={`${utilStyles.flex} ${styles.companyInfo}`}>
          <h2 className={`${styles.companyName} ${utilStyles.headingSm}`}>
            {company}
          </h2>
          {company_url ? (
            <span
              className={`${utilStyles.textColorSecondary} ${utilStyles.textSm}`}
            >
              {company_url}
            </span>
          ) : null}
        </div>
        {company_url ? (
          <a
            className={`${styles.companyLink} ${buttonStyles.btnLink}`}
            href={company_url}
            rel='external nofollow noopener noreferrer'
            target='_blank'
          >
            Company Site{' '}
            <svg
              className={styles.externalLinkIcon}
              width='16'
              height='16'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='none'
                stroke='#048de0'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='1.5'
                d='M15.86 7.61v10.22c0 .69-.56 1.25-1.25 1.25H2.37c-.69 0-1.25-.56-1.25-1.25V5.6c0-.69.56-1.25 1.25-1.25h9.75m6.76 1.48l-.1-4.82M13.97.92l4.81.09m-9.42 9.46l8.5-8.5'
              ></path>
            </svg>
          </a>
        ) : null}
      </article>
    </div>
  );
};

export default CompanyCard;
