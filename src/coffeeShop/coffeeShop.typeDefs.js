import {gql} from "apollo-server";

export default gql`
    
    type CoffeeShopPhoto {
        id:     Int!
        url:    String!
        shop:   CoffeeShop!
    }
    
    type CoffeeShop {
        id:         Int!
        name:       String!
        user:       User!
        
        latitude:   String
        longitude:  String
        
        photos:     [CoffeeShopPhoto]
        categories: [Category]
        
        isMine: Boolean
    }
    
    type Category {
        id:         Int!
        name:       String!
        slug:       String
        shops:      [CoffeeShop]
        totalShops: Int
    }

`;

//카테고리의 토탈샵스는 콤퓨트필드