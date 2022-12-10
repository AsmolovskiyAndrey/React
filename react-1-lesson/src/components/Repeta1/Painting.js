// import defaultImage from "./";

function Painting(props) {
  const { ImageUrl, title, profileUrl, author = "not find", price } = props;

  return (
    <div>
      <img src={ImageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

export default Painting;
