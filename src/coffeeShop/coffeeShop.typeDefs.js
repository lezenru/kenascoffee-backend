import {gql} from "apollo-server";

export default gql`
    
    type CoffeeShopPhoto {
        id:     Int!
        url:    String!
        shop:   CoffeeShop
    }
    
    type CoffeeShop {
        id:         Int!
        name:       String!
        latitude:   String
        longitude:  String
        user:       User!
        photos:     [CoffeeShopPhoto]
        categories: [Category]
    }
    
    type Category {
        id:         Int!
        category:   String!
        slug:       String
        shops:      [CoffeeShop]
        totalShops: Int
    }

`;

//카테고리의 토탈샵스는 콤퓨트필드