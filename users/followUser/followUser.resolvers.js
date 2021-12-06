import {protectResolver} from "../users.utils";
import client from "../../client";

export default {

    Mutation: {

        followUser: protectResolver(async(_, {username}, {loggedInUser}) => {
            const ok = await client.user.findUnique({where:{username}});

            if (!ok){
                return {
                    ok:false,
                    error:"해당 유저가 존재하지 않습니다"
                }
            }


            await client.user.update({
                where: {
                    id: loggedInUser.id
                },
                data: {
                    following: {
                        connect: {
                            username,
                        }
                    }
                },

            }) // end dof client.user.update

            return {
                ok: true,
            };

        })


    }

}