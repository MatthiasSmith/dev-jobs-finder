import { formatDistanceToNowStrict } from 'date-fns';

const DateString = ({ dateString }: { dateString: string }) => {
  const formatted = formatDistanceToNowStrict(new Date(dateString));
  let shortened = formatted.replace(/years?/g, 'y');
  shortened = shortened.replace(/months?/g, 'd');
  shortened = shortened.replace(/days?/g, 'd');
  shortened = shortened.replace(/hours?/g, 'h');
  shortened = shortened.replace(/minutes?/g, 'min');
  return <span>{shortened.replace(' ', '')} ago</span>;
};

export default DateString;
