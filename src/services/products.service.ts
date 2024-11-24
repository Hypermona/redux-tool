class ProductsService {
  async getAllProducts() {
    const products = await fetch("https://fakestoreapi.com/products");
    return products.json();
  }
  async addProduct(variables: IProduct) {
    const product = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(variables),
    });
    return product.json();
  }
}
export default new ProductsService();
