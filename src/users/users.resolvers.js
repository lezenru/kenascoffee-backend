import client from "../client";

/* async 는 여기서 해 줄 필요 없음 */

export default {
    User: {

        totalFollowing: ({id}) =>
            client.user.count({
                where: {
                    followers: {
                        some: {
                            id,
                        }
                    }
                }
            }),

        totalFollowers: ({id}) =>
            client.user.count({
                where: {
                    following: {
                        some: {
                            id,
                    }
                }
            }
        }),

        isMe: ({id}, _, {loggedInUser}) => {
            if (!loggedInUser){
                return false;
            }

            return id===loggedInUser.id;
        },

        isFollowing: async ({id}, _, {loggedInUser}) => {
            if (!loggedInUser){
                return false;
            }

            const exists = await client.user.count({
                where: {
                    username: loggedInUser.username,
                    following: {
                        some: {id},
                    },
                }
            });

            return Boolean(exists);
        },



    }//end of User
}//end of export