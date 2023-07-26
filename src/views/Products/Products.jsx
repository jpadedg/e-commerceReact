import './index.scss';
import Search from '../../components/Search/Search';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';


const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find(product => product.id == productId)


  return (
    <div className='products'>
        <HeaderMenu/>
        <Search/>
        <ProductDetail key={selectedProduct.id} data={selectedProduct}/>
    </div>
  )
}

export default Products