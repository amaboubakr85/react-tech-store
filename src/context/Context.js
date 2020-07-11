import React, { Component } from "react";
import LinkData from "./LinkData";
import { SocialData } from "./SocialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sideBarOpen: false,
    cartSideBarOpen: false,
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false,
    linksData: LinkData,
    cart: [],
    SocialData: SocialData,
  };
  // on App loading
  componentDidMount() {
    this.setProducts(items);
  }

  // bring or set products Data
  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      let image = item.fields.image.fields.file.url;
      let product = { ...item.fields, id: id, image: image };
      return product;
    });
    // console.log(storeProducts);
    // return storeProducts;

    //    Featured or filtered Products by Featured
    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    this.setState({
      storeProducts: storeProducts,
      featuredProducts: featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false,
    });
  };

  //   GET STORAGE CART
  getStorageCart = () => {
    return [];
  };

  //   GET SINGLE PRODUCT
  getStorageProduct = () => {
    return [];
  };

  //   GET TOTALS
  getTotals = () => {};
  //   ADD TOTALS
  addTotals = () => {};

  //   SYNC STORAGE
  syncStorage = () => {};

  //   ADD TO CARD
  addToCard = (id) => {
    console.log(`add to card ${id}`, id);
  };

  //   SET SINGLE PRODUCT
  setSingleProduct = (id) => {
    console.log(`set single product ${id}`, id);
  };

  //   HANDLE SIDE BAR
  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen,
    });
  };
  //   HANDLE SIDE CART
  handleSideCart = () => {
    this.setState({
      cartSideBarOpen: !this.state.cartSideBarOpen,
    });
  };
  //   CLOSE CART
  closeCart = () => {
    this.setState({
      cartSideBarOpen: false,
    });
  };
  //   OPEN CART
  openCart = () => {
    this.setState({
      cartSideBarOpen: true,
    });
  };

  render() {
    // console.log(this.state.items);
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSideBar,
          handleSideCart: this.handleSideCart,
          openCart: this.openCart,
          closeCart: this.closeCart,
          addToCard: this.addToCard,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
