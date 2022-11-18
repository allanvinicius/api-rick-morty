import { Card } from "./styles";

export function CardCharacter({ image, name, gender, species }) {
  return (
    <Card>
      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="text">
        <h2>{name}</h2>
        <ul>
          <li>Gênero: {gender}</li>

          <li>Espécie: {species}</li>
        </ul>
      </div>
    </Card>
  );
}
