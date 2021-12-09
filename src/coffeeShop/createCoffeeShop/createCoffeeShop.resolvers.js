import {protectResolver} from "../../users/users.utils";
import client from "../../client";
import {processCategories} from "../coffeeShop.utils";

/*
        커피샵 구성요소
        ------------id:         Int
        name:       String
        latitude:   String
        longitude:  String
        ------------user:       User
        ------------photos:     [CoffeeShopPhoto]
        categories: [Category]

* */


export default {
    Mutation: {
        createCoffeeShop: protectResolver(
            async (_, {name, latitude, longitude, categories}, {loggedInUser}) => {

            let categoryObj = [];

            if (categories){
                categoryObj = processCategories(categories);
            }

            const shop =  await client.coffeeShop.create({
                data: {
                    name,
                    latitude,
                    longitude,
                    user: {
                        connect: {
                            id: loggedInUser.id
                        }
                    },
                    ...(categoryObj.length > 0 && {
                        categories: {
                            connectOrCreate: categoryObj
                        },
                    })
                }
            })



           if (shop){
               return {ok: true, shop}
           } else {
               return {ok: false, error: "커피샵 생성에 실패했습니다"}
           }




        })//end of createCoffeeShop
    }
}