import client from "../client";

export default {

    CoffeeShop: {

        //단일
        user: ({userId}) => {
            return client.user.findUnique({
                where: {id: userId}
            });
        },

    },

};