import {gql} from "apollo-server";

export default gql`

    type editShopResult {
        ok: Boolean!
        error: String
    }
    
    type Mutation {
        editCoffeeShop(
            id: Int!
            name: String!
            latitude: Int
            longitude: Int
            newCategories: String!
        ): editShopResult!
    }
   
`;

