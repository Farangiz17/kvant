    import clinet, {baseDomain} from "./repository";

    class Product {
        getProductById(id){
            const endPoint = `products/${id}`

            const product = clinet.get(baseDomain + endPoint)
            .then(ress => {
                return ress
            })
            .catch(err => {
                return err
            })
            return product
        }
    }

    export default new Product()