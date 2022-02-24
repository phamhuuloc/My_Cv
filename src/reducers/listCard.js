const INITIAL_STATE = {
  categories: [],
  products: [
    {
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Thiết Kế Web",
      url: "",
      category: "Web",
    },
    {
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Một Số Dự Án Nổi Bật",
      url: "",
      category: "Behance",
    },
    {
      img: "https://zocytus.github.io/myweb/assets/img/work5.jpg",
      title: "Edit Video",
      url: "",
      category: "Edit",
    },
  ],
  filteredProducts: [],
};
const listCard = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS_WITH_CATEGORY": {
      var filteredProducts = [];
      if (action.payload.toLowerCase().includes("all"))
        filteredProducts = state.products;
      state.products.map((product) => {
        if (
          product.category.toLowerCase().includes(action.payload.toLowerCase())
        )
          filteredProducts.push(product);
      });
      return {
        ...state,
        filteredProducts,
      };
    }
    default:
      return state;
  }
};
export default listCard;
