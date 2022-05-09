import { useEffect, useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data";

const Cart = () => {
  const [cart, setCart] = useState(data);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => { return prev + curr.priceTotal }, 0),
    count: cart.reduce((prev, curr) => { return prev + curr.count }, 0)
  });
  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => { return prev + curr.priceTotal }, 0),
      count: cart.reduce((prev, curr) => { return prev + curr.count }, 0)
    })
  }, [cart]);
  //удаление товара из корзины
  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };
  //увеличение кол-ва товара
  const increase = (id) => {
    setCart(() => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: ++product.count * product.price
          };
        }
        return product
      });
    });
  };
  //уменьшение кол-ва товара
  const decrease = (id) => {
    setCart(() => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: (product.count - 1 > 1 ? --product.count : 1) * product.price
          };
        }
        return product
      });
    });
  };
  //изменение кол-ва товара в инпуте
  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price
          }
        }
        return product
      });
    });
  }


  const products = cart.map((product) => {
    return <Product product={product} key={product.id} deleteProduct={deleteProduct} increase={increase} decrease={decrease} changeValue={changeValue} />
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
}

export default Cart;