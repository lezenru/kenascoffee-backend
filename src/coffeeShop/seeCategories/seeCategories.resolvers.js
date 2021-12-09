import client from "../../client";

/* seeCategories should list all the Category
and should have a totalShops computed field that counts all the CoffeeShop inside of the Category,
it should also have pagination*/

//아직안햇음 12.9

export default {
    Query: {
        seeCategories: async (_, {page}) => {


            const categories = await client.category.findMany();

            //이러지 말라고 했지만 기억이 안남


            console.log("totalShops :"+totalShops.count);

            return {
                ok: true,
                shops: coffeeShops,
                totalPages: Math.ceil(totalShops/5),
            }

        }
    }
}