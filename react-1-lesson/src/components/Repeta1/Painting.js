import PropTypes from "prop-types";

const Painting = (props) => {
  const {
    ImageUrl,
    title,
    profileUrl,
    author = "not find",
    price,
    quantity,
  } = props;

  return (
    <div>
      <img src={ImageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity <= 5 ? "заканчивается" : "есть в наличии"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  ImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
