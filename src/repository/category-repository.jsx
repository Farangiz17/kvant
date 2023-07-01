import clinet, { baseDomain } from "./repository";

class Category {
  getCategory() {
    const endPoint = "categories";

    const category = clinet
      .get(baseDomain + endPoint)
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return category;
  }

  getProductsByCategory(id) {
    const endPoint = `products?categoryId=${id}`;

    const generator = clinet
      .get(baseDomain + endPoint)
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return generator;
  }

  getHomeBannersWithProducts() {
    const endPoint = "categories/banners";

    const generator = clinet
      .get(baseDomain + endPoint)
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return generator;
  }
  getCategoryProductById(id) {
    const endPoint = `products?categoryId=${id}`;

    const product = clinet
      .get(baseDomain + endPoint)
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return product;
  }
}

export default new Category();
