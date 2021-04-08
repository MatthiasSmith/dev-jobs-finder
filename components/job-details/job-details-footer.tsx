import styles from './job-details-footer.module.css';
import utilStyles from '../../styles/utils.module.css';
import buttonStyles from '../button/button.module.css';

const JobDetailsFooter = ({
  title,
  company,
  applyUrl,
}: {
  title: string;
  company: string;
  applyUrl: string;
}) => {
  return (
    <div
      className={`${utilStyles.flexRow} ${utilStyles.alignCenter}`}
    >
      <div className={`${styles.companyInfo} ${utilStyles.flex}`}>
        <h2 className={`${utilStyles.headingMd}`}>{title}</h2>
        <span className={`${utilStyles.textSm} ${utilStyles.textColorSecondary}`}>{company}</span>
      </div>
      <a
        className={`${buttonStyles.btnLink} ${buttonStyles.filled}`}
        href={applyUrl}
        rel='external noreferrer nofollow noopener'
        target='_blank'
      >
        Apply Now
      </a>
    </div>
  );
};

export default JobDetailsFooter;
