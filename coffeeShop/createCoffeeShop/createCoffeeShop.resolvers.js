import {protectResolver} from "../../users/users.utils";
import client from "../../client";
import {processCategories} from "../coffeeShop.utils";

/*
        커피샵 구성요소
        id:         Int
        name:       String
        latitude:   String
        longitude:  String
        user:       User
        photos:     [CoffeeShopPhoto]
        categories: [Category]

* */



export default {
    Mutation: {
        createCoffeeShop: protectResolver(async (_, {file, caption}, {loggedInUser}) => {

            let categoryObj = [];

            if (caption){
                categoryObj = processCategories(caption);
            }

            console.log(hashtagObj)

            return client.coffeeShop.create({
                data: {
                    file,
                    caption, //해쉬태그 길이가 0 이상이면 && 뒤를 반환
                    user: {
                        connect: {
                            id: loggedInUser.id
                        }
                    },
                    ...(hashtagObj.length > 0 && {
                        hashtags: {
                            connectOrCreate: hashtagObj
                        },
                    })
                }
            })


        })//end of uploadPhoto
    }
}