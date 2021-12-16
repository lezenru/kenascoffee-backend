import client from "../../client";
import {log} from "nodemon/lib/utils";

/* seeCoffeeShop should get a CoffeeShop by id. */
//유저 {} 하면 나오게 리졸버에 추가적으로 입력해야함


export default {

    Query: {
        seeCoffeeShop: (_, {id}) => client.coffeeShop.findUnique({
            where: {id},
        }),




    }
};