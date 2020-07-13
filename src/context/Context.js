import React, {Component} from "react";
import LinkData from "./LinkData";
import {SocialData} from "./SocialData";
import {items} from "./productData";

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
        loading: true,
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
            const {id} = item.sys;
            let image = item.fields.image.fields.file.url;
            let product = {...item.fields, id: id, image: image};
            return product;
        });
        // console.log(storeProducts);
        // return storeProducts;

        //    Featured or filtered Products by Featured
        let featuredProducts = storeProducts.filter(
            (item) => item.featured === true
        );

        this.setState(
            {
                storeProducts: storeProducts,
                featuredProducts: featuredProducts,
                filteredProducts: storeProducts,
                cart: this.getStorageCart(),
                singleProduct: this.getStorageProduct(),
                loading: false,
            },
            () => {
                this.addTotals();
            }
        );
    };

    //   GET STORAGE CART
    getStorageCart = () => {
        let cart;
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        } else {
            cart = [];
        }
        return cart;
    };

    //   GET SINGLE PRODUCT
    getStorageProduct = () => {
        return localStorage.getItem("singleProduct")
            ? JSON.parse(localStorage.getItem("singleProduct"))
            : {};
    };

    //   GET TOTALS
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach((item) => {
            subTotal += item.total;
            cartItems += item.count;
        });
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));

        return {
            subTotal: subTotal,
            cartItems: cartItems,
            total: total,
            tax: tax,
        };
    };
    //   ADD TOTALS
    addTotals = () => {
        const totals = this.getTotals();
        console.log(totals);
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total,
        });
    };

    //   SYNC STORAGE
    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    };

    //   ADD TO CARD
    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find((item) => {
            return item.id === id;
        });
        if (!tempItem) {
            tempItem = tempProducts.find((item) => {
                return item.id === id;
            });
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(
            () => {
                return {
                    cart: tempCart,
                };
            },
            () => {
                this.addTotals();
                this.syncStorage();
                this.openCart();
            }
        );
    };

    //   SET SINGLE PRODUCT
    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find((item) => {
            return item.id === id;
        });
        localStorage.setItem("singleProduct", JSON.stringify(product));
        this.setState({
            singleProduct: {...product},
            loading: false,
        });
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

    // cart functionality

    // increment
    increment = (id) => {
        console.log(id);

    }

    //Decrement
    decrement = (id) => {
        console.log(id)
    }
    //clear cart
    clearCart = () => {
        console.log("awosome you just cleared the cart");
    }
    //remove item from cart
    removeItem = (id) => {
        console.log(id)
    }

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
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    clearCart: this.clearCart,
                    removeItem: this.removeItem
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
