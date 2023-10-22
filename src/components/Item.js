import React , {useState} from "react";


function Item({ name, category }) {
  const [isIncart , setIsInCart] = useState(false);

  function checkIsInCart(){
    return setIsInCart(!isIncart);
  }

  return (
    <li className={isIncart? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={checkIsInCart} className="add">{isIncart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
