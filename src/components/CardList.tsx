import Card, { CardProps } from './Card.tsx';

interface CardListProps {
  cards: CardProps[];
  emptyHeading: string;
}

function CardList({ cards, emptyHeading }: CardListProps) {
  const count = cards.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Cards' : 'Card';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {cards.map((card) => (
        <Card
          id={card.id}
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          category={card.category}
          createdAt={card.createdAt}
        />
      ))}
    </section>
  );
}

export default CardList;
