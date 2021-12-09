import {protectResolver} from "../users.utils";
import client from "../../client";

export default {
    Mutation: {

        unfollowUser: protectResolver(async (_, {username}, {loggedInUser}) => {
            const ok = await client.user.findUnique({
                where: {username},

            });

            if (!ok){
                return {
                    ok: false,
                    error: "해당 유저를 언팔로우 할 수 없습니다"
                }
            }//end of if

            await client.user.update({
                where: {
                    id: loggedInUser.id,
                },
                data: {
                    following: {
                        disconnect: {
                            username,
                        }
                    }

                }

            }); // end of update


            return {
                ok: true,
            }
        })

    }
}