import client from "../../client";

/* seeCategory should list all the CoffeeShop inside of a Category with pagination. */

export default {
    Query: {
        seeCategory: async (_, {category, page}) => {

            //해당 카테고리가 포함된 모든 커피샵을 가져와야함
            const coffeeShops = await client.category.findUnique({
                where: {category}}).shops({
                take: 5,
                skip: (page-1)*5
            });

            //이러지 말라고 했지만 기억이 안남 12.9
            //
            const totalShops = client.coffeeShop.count({
                    where: {
                        categories: {

                                category: category,

                        },
                    },
                });

            console.log("totalShops :"+totalShops.count);

            return {
                ok: true,
                shops: coffeeShops,
                totalPages: Math.ceil(totalShops/5),
            }

        }
    }
}