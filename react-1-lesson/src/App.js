import './App.css';
import products from './products.json';
import ProductList from './components/ProductList/ProductList';

// console.log(products);

function App() {
  return (
    <div className="app">
        <ProductList products={products} />
    </div>
  );
}

export default App;
