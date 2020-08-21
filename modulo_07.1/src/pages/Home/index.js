import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format.js';
import api from '../../services/api';
import Container from '../../components/Container';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {

  const[products, setProducts] = useState([]);

  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {}),);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProduct(){
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));

      setProducts(data);
    };
    loadProduct();
  }, []); //Se passar o array vazio no final irá executar uma unica vez


  function handleAddProduct(id) {
    //Toda action necessita de um TYPE e o conteúdo
    dispatch(CartActions.addToCartRequest(id));
  }

  let history = useHistory();
  function handleRedirectToCart() {
    history.push('/cart');
  }

  return (
    <Container>
      <h1 style={{marginBottom: 25}}>
        <FaSpinner size={21} />
        HOME
      </h1>

      <ProductList>
        { products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[product.id] || 0}
              </div>

              <span>ADD AO CARRINHO</span>
            </button>
            <button className="btn-redirect-cart" type="button" onClick={handleRedirectToCart}>
              <span>IR P/ CARRINHO</span>
            </button>
          </li>
        )) }

      </ProductList>
    </Container>
  );
}