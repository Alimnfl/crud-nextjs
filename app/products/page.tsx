import AddProduct from './addProduct';
import DeleteProduct from './deleteProduct';
import UpdateProduct from './updateProduct';

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <h1 className="mx-auto text-center text-white text-5xl font-bold mb-3 rounded-xl w-3/4 bg-gray-800 p-5 ">Enjoy!</h1>
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex gap-1">
                <UpdateProduct {...product} />
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
