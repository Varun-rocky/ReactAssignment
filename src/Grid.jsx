import { useState } from "react";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Button from "./components/Button";
const TEST_DATA = [
  { name: "product one", id: 12, price: 23 },
  { name: "product two", id: 2, price: 345 },
  { name: "product 3", id: 3, price: 80 },
  { name: "product four", id: 56, price: 123 },
  { name: "product five", id: 222, price: 2112 },
];
function Grid() {
  const [products, setProducts] = useState(TEST_DATA);
  const [selectedProducts, setselectedProducts] = useState([]);
  const [isSorted,setIsSorted] =useState(false);

  const createProductList = () => {
    return products.map((product) => {
      return (
        <ListItem
          key={product.id}
          product={product}
          selectHandler={selectProduct}
          deleteHandler={deleteProduct}
        />
      );
    });
  };

  const searchHandler = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm) {
      const searchFilterItems = products.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.price.toString().includes(searchTerm)
      );

      setProducts(searchFilterItems);
    } else setProducts(TEST_DATA);
  };

  const deleteProduct = (product) => {
    const updateSelectedItems = selectedProducts.filter(
      (item) => item.id !== product.id
    );
    setselectedProducts(updateSelectedItems);

    const updateProductListItems = products.filter(
      (item) => item.id !== product.id
    );
    setProducts(updateProductListItems);
  };

  const selectProduct = (product) => {
    setselectedProducts((prevProducts) => [...prevProducts, product]);
  };
  
  const sortPrice = () =>{
    const sortedProducts = [...products].sort((a,b)=>{
      if( !isSorted ) return b.price-a.price;
      else return a.price - b.price 
    });
    setProducts(sortedProducts)
    setIsSorted(!isSorted)
  }

  return (
    <section className="container mx-auto">
      <Search searchHandler={searchHandler} />
      <section className="mt-10">
       <div className="flex bg-gray-200">
       <div className="p-2 w-24 font-semibold">Select</div>
        <div  className="p-2 w-32 font-semibold">Name</div>
        <div  className="  p-2.5 w-24 font-semibold">Price
        <Button
            className="p-2"
            buttonLabel="sort"
            clickHandler={()=>sortPrice()}
           />
            </div>
        <div  className="p-2 w-24 font-semibold">Actions</div>
       </div>
        <ul>{products && createProductList()}</ul>
      </section>
    </section>
  );
}

export default Grid;
