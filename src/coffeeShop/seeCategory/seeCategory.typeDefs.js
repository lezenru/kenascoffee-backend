import {gql} from "apollo-server";

/* seeCategory should list all the CoffeeShop inside of a Category with pagination. */

export default gql`

    type SeeCategoryResult {
        ok: Boolean!
        error: String
        shops: [CoffeeShop]
        totalPages: Int
    }
    
    type Query {
        seeCategory(category: String!, page: Int!): SeeCategoryResult!
    }

`;

