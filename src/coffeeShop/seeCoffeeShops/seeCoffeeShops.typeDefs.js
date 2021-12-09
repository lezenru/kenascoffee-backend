import {gql} from "apollo-server";

/* seeCoffeeShops should list all the CoffeeShop with pagination. */

export default gql`
    
    type SeeShopsResult {
        ok: Boolean!
        error: String
        shops: [CoffeeShop]
        totalPages: Int
    }
    
    type Query {
        seeCoffeeShops(page:Int!): SeeShopsResult!
    }

`;




