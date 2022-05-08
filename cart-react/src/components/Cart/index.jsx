import { useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data";

const Cart = () => {
  const [cart, setCart] = useState(data);
//удаление товара из корзины
  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };
//увеличение кол-ва товара
const increase = (id) =>{
  setCart(()=>{
    return cart.map((product)=>{
        if(product.id === id){
          return{
            ...product,
            count: ++product.count,
            priceTotal: product.count * product.price
          };
        }
        return product
    });
  });
};
  const products = cart.map((product) => {
    return <Product product={product} key={product.id} deleteProduct={deleteProduct} increase={increase} />
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
}

export default Cart;