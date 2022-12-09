  //     "id": 1,
  //     "title": "Samsung 9",
  //     "price": 549,
  //     "rating": 4.69,
  //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
import PropTypes from 'prop-types';
import './ProductDetails.css';

const ProductDetails = (props) => {
   return (
      <div className='product-card'>
         <img src={props.product.thumbnail} alt ="product thumbnail"/>
         <p>
            {props.product.title.toUpperCase()}
            {props.product.rating > 4.5 ? <b> Top product !</b> : <b> Good product</b>}
         </p>
         <p> Rating: {props.product.rating}</p>
         <p>Price: {props.product.price} $</p>
      </div>
   )
};

ProductDetails.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
   }).isRequired,
}

export default ProductDetails;