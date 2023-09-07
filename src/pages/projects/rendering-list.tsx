import { people } from '../../data';
import { getImageUrl } from '../../utils/getImage';
import Card from '../../components/card';

export const List = (): JSX.Element => {
  return (
    <>
      <h2>Scientists</h2>
      {people.map((person) => (
        <Card key={person.id}>
          <div>
            <img src={getImageUrl(person)} alt={person.name} />
          </div>
          <div>
            <h2>{person.name}</h2>
            <p>{person.accomplishment}</p>
          </div>
        </Card>
      ))}
    </>
  );
};
