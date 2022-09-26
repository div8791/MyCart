import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer.js'
import Additem from './components/Additem.js'
function App() {
  const products = [
    {
      price: 999,
      name: "Pixel 7",
      quantity: 0,
    },
    {
      price: 499,
      name: "OnePlus 9",
      quantity: 0,
    }
  ]
  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    settotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
      <Additem addItem={addItem}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
        removeItem={removeItem} />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />

    </>
  );
}

export default App;
