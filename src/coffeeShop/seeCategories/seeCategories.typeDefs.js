import {gql} from "apollo-server";

/* seeCategories should list all the Category
and should have a totalShops computed field that counts all the CoffeeShop inside of the Category,
it should also have pagination*/


export default gql`
    
    
    type SeeCategoriesResult {
        ok: Boolean!
        error: String
        categories: [Category]
        totalPages: Int
    }

    type Query {
        seeCategories(page:Int!): SeeCategoriesResult!
    }

`;

