import { parseISO, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import format from 'date-fns/format';

type TimeAgoProps = {
  timestamp: string;
};

const TimeAgo = ({ timestamp }: TimeAgoProps) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date, { locale: ptBR });

    timeAgo = `há ${timePeriod}`;
  }

  return (
    <span className="text-start" title={timestamp}>
      <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
