import {gql} from "apollo-server";

export default gql`

    type CreateShopResult {
        ok: Boolean!
        error: String
        shop: CoffeeShop
    }
    
    
    type Mutation {
        createCoffeeShop (
            name: String! 
            latitude: Int
            longitude: Int
            categories: String!
        ): CreateShopResult
    }
`;