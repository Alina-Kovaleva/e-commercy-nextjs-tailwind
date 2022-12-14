import ProductItem from '../components/ProductItem';
import Wrapper from '../components/Wrapper';

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products');
  const data = await products.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
  };
}

export default function Home(props) {
  return (
    <Wrapper title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {props.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </Wrapper>
  );
}
