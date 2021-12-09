import {protectResolver} from "../../users/users.utils";
import client from "../../client";
import {processCategories} from "../coffeeShop.utils";

export default {
    Mutation: {
        editCoffeeShop: protectResolver(
          async (_, {id, name, latitude, longitude, newCategories}, {loggedInUser}) => {

          const oldShop = await client.coffeeShop.findFirst({
              where: {
                  id,
                  userId: loggedInUser.id,
              },
              include: {
                  categories: {
                      select: {
                          category: true,
                      }
                  }
              },
          });


          if (!oldShop) {
              return {
                  ok: false,
                  error: "커피샵을 찾지 못했습니다"
              }
          } // end of if

          const shop = await client.coffeeShop.update({
              where: {id},
              data: {
                  name,
                  latitude,
                  longitude,
                  categories: {
                      disconnect: oldShop.categories,
                      connectOrCreate: processCategories(newCategories),
                  }
              }
          });

          if (shop){
              return {ok: true}
          }else{
              return {ok: false, error: "커피샵 수정에 실패했습니다"}
          }

      })
    }
}