import client from "../../client";

/* seeCoffeeShops should list all the CoffeeShop with pagination. */

export default {
    Query: {
        seeCoffeeShops: async (_, {page}) => {

            if (!page){page=1};

            const coffeeShops = await client.coffeeShop.findMany({
                    skip: (page-1)*5,
                    take: 5
                });

            const totalShops = await client.coffeeShop.count();

            console.log(`totalShops:`+totalShops);

            return {
                ok: true,
                shops: coffeeShops,
                totalPages: Math.ceil(totalShops/5),
            }

        }
    }
}