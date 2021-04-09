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
            rel='external nofollow noopener'
          >
            Company Site
          </a>
        ) : null}
      </article>
    </div>
  );
};

export default CompanyCard;
