import Image from 'next/image';

import utilStyles from '../styles/utils.module.css';
import styles from './job-item.module.css';

const JobItem = ({
  id,
  company_logo,
  title,
  company,
  type,
  location,
  created_at,
}: {
  id: string,
  company_logo: string,
  title: string,
  company: string,
  type: string,
  location: string,
  created_at: string
}) => {
  return (
    <li className={`${utilStyles.card} ${utilStyles.noListStyle}`}>
      <h3 className={utilStyles.headingMd}>
        {company_logo ? (
          <Image
            src={company_logo}
            width={80}
            height={80}
            layout='fixed'
            objectFit='contain'
          ></Image>
        ) : null}
        {title}
      </h3>
      <div>
        <h4 className={utilStyles.headingSm}>{company}</h4>
      </div>
      <p>job-type: {type}</p>
      <p>location: {location}</p>
      <p>posted on: {new Date(created_at).toDateString()}</p>
    </li>
  );
};

export default JobItem;
