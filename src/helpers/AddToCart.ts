const addToCart = (product: any, setCart: any, Cart: any) => {
  const ProductExist = Cart.find((item: any) => {
    return item.id === product.id;
  });

  if (ProductExist) {
    setCart(
      Cart.map((item: any) =>
        item.id === product.id && ProductExist.quantity < 50
          ? {
              ...ProductExist,
              quantity: ProductExist.quantity + 1,
            }
          : item
      )
    );
  } else {
    setCart([...Cart, { ...product, quantity: 1 }]);
  }
};

export default addToCart;
