import Painting from "./Painting";
import paintings from "./paintings.json";

const painting = paintings[0];

function AppRepeta() {
  return (
    <div>
      <Painting
        ImageUrl={painting.url}
        title={painting.title}
        author={painting.author.tag}
        profileUrl={painting.author.url}
        price={painting.price}
      />
    </div>
  );
}

export default AppRepeta;
