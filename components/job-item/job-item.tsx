import Image from 'next/image';
import Link from 'next/link';

import styles from './job-item.module.css';
import utilStyles from '../../styles/utils.module.css';
import DateString from '../date/date';
import addFadeInClass from '../../helpers/addFadeInClass';

const JobItem = ({
  id,
  company_logo,
  title,
  company,
  type,
  location,
  created_at,
}: {
  id: string;
  company_logo: string;
  title: string;
  company: string;
  type: string;
  location: string;
  created_at: string;
}) => {
  return (
    <li
      className={`${utilStyles.card} ${utilStyles.noListStyle} ${styles.jobItem}`}
    >
      <Link href={`jobs/${id}`}>
        <a>
          <div
            className={`${utilStyles.flexRow} ${utilStyles.alignCenter} ${utilStyles.mb1}`}
          >
            {company_logo && (
              <div className={`${styles.logoContainer}`}>
                <Image
                  src={company_logo}
                  width={65}
                  height={65}
                  layout='fixed'
                  objectFit='contain'
                  onLoad={addFadeInClass}
                ></Image>
              </div>
            )}
            <div>
              <span className={utilStyles.textColorSecondary}>{company}</span>
              <h3 className={utilStyles.headingSm}>{title}</h3>
            </div>
          </div>
          <div
            className={`${utilStyles.textSm} ${utilStyles.flexRow} ${utilStyles.alignCenter} ${utilStyles.spaceBetween} ${utilStyles.textColorSecondary}`}
          >
            <div>
              <span>{type}</span> -{' '}
              <span className={utilStyles.textCapitalize}>{location}</span>
            </div>
            <div
              className={`${utilStyles.textColorSecondary} ${utilStyles.ml1}`}
            >
              <DateString dateString={created_at} />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default JobItem;
