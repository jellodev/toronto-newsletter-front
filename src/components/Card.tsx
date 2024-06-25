import DateDisplay from './DateDisplay.tsx';

export interface CardProps {
  id: string;
  title: string;
  category: string;
  createdAt: Date;
  imageUrl?: string;
}

function Card({ id, imageUrl, title, category, createdAt }: CardProps) {
  return (
    <div id={id} className={'card-container'}>
      <div className={'card-header'}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={'card-body'}>
        <div className={`category ${category}`}></div>
        <div className={'title'}></div>
      </div>
      <div className={'card-footer'}>
        <DateDisplay classNames={'createdAt'} date={createdAt} />
      </div>
    </div>
  );
}

export default Card;
