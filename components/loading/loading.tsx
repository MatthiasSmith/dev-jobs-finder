import utilStyles from '../../styles/utils.module.css';
import LoadingSpinner from '../loading-spinner/loading-spinner';

const Loading = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={`${utilStyles.flexColumn} ${utilStyles.alignCenter} ${utilStyles.justifyCenter} ${className}`}
    >
      <LoadingSpinner />
      <div className={`${utilStyles.mt1} ${utilStyles.headingMd}`}>
        {text || 'Loading...'}
      </div>
    </div>
  );
};

export default Loading;
