import CardList from '../components/CardList.tsx';
import { CardProps } from '../components/Card.tsx';
import TextInput from '../components/TextInput/TextInput.tsx';

function Feed() {
  const dummyCards = [
    {
      id: 'feed1-id',
      title: 'feed1',
      imageUrl: 'https://picsum.photos/seed/picsum/200',
      category: 'hidden gem',
      createdAt: new Date(),
    },
    {
      id: 'feed2-id',
      title: 'feed2',
      imageUrl: 'https://picsum.photos/seed/picsum/200',
      category: 'hidden gem',
      createdAt: new Date(),
    },
  ] as CardProps[];

  return (
    <>
      <TextInput classNames={`searchInput`} placeholder={`Enter keywords!`} />
      <CardList cards={dummyCards} emptyHeading={`Not found!`} />
    </>
  );
}

export default Feed;
