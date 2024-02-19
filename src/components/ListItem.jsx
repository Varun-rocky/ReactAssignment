import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
function ListItem({ product, selectHandler, deleteHandler }) {
  const [isItemSelected, setItemSelected] = useState(false);

  const selectItemHandler = (product) => {
    setItemSelected(!isItemSelected);
    selectHandler(product);
  };

  const deleteItemHandler = (product) => {
    deleteHandler(product);
  };

  const createListItem = () => {
    return (
      <li className={`flex p-2 border-b-2 ${isItemSelected ? "bg-red-200" : ""}`} key={product.id}>
        <div className=" w-24 py-2">
          <Input
            type="checkbox"
            changeHandler={() => selectItemHandler(product)}
          />
        </div>
        <div className=" w-32 py-2">
          <h2>{product.name}</h2>
        </div>
        <div className=" w-24 py-2">
          <h2>{product.price}</h2>
          </div>
          <div className=" w-24 py-2">
          <Button
            buttonLabel="delete"
            clickHandler={()=>deleteItemHandler(product)}
            disabled={isItemSelected ? false:true}/>
            </div>
            </li>
             );

}
return( <>
{createListItem()}
</>);}
export default ListItem;
