import React from 'react';

interface Props {
  date: Date;
  classNames?: string;
}

const DateDisplay: React.FC<Props> = ({ date, classNames }) => {
  const userLocale = Intl.DateTimeFormat().resolvedOptions().locale;
  const formattedDate = date.toLocaleDateString(userLocale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return <div className={classNames || ''}>{formattedDate}</div>;
};

export default DateDisplay;
