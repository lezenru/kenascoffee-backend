import { gql } from "apollo-server";

export default gql`
    type Mutation {
        createCoffeeShop(file: String!, caption: String) : CoffeeShop
    }
`;