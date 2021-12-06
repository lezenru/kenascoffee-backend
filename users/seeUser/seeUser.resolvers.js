import client from "../../client";

export default {
    Query: {

        //동시에 안 쓸듯. 주석처리함
        /*
        seeUser: async (_, {username, page}) => {

            if (!page) {
                page = 1;
            }

            const ok = await client.user.findUnique({
                where: {username},
                select: {id: true},
            })

            if (!ok){
                return {
                    ok: false,
                    error: "해당 유저를 찾을 수 없습니다"
                };
            }

            //팔로워-----------------------------------------
            const followers = await client.user
                .findUnique({ where: {username} })
                .followers({
                    take: 5,
                    skip: (page-1)*5
                });


            const totalFollowers = await client.user.count({
                where: {following: {some: {username}}}
            })

            //팔로잉----------------------------------------
            const following = await client.user
                .findUnique({ where: {username} })
                .following({
                    take: 5,
                    skip: (page-1)*5
                });

            const totalFollowing = await client.user.count({
                where: {followers: {some: {username}}}
            })


            return {
                ok: true,
                followers,
                following,
                totalFollowersPages: Math.ceil(totalFollowers/5),
                totalFollowingPages: Math.ceil(totalFollowing/5),
            }




        },

        */

        seeFollowers: async (_, {username, page}) => {

            if (!page) {
                page = 1;
            }

            //유효
            const ok = await client.user.findUnique({
                where: {username},
                select: {id: true},
            })

            if (!ok){
                return {
                    ok: false,
                    error: "해당 유저를 찾을 수 없습니다"
                };
            }
            //---


            const followers = await client.user
                .findUnique({ where: {username} })
                .followers({
                    take: 5,
                    skip: (page-1)*5
                });


            const totalFollowers = await client.user.count({
                where: {following: {some: {username}}}
            })



            return {
                ok:true,
                followers,
                totalPages: Math.ceil(totalFollowers/5),
            }

        },

        seeFollowing: async (_, {username, lastId}) => {

            //유효
            const ok = await client.user.findUnique({
                where: {username},
                select: {id: true},
            })

            if (!ok){
                return {
                    ok: false,
                    error: "해당 유저를 찾을 수 없습니다"
                };
            }
            //--

            const following = await client.user
                .findUnique({ where: {username} })
                .following({
                    take: 5,
                    skip: lastId ? 1 : 0,
                    ...(lastId && {cursor: {id: lastId}}),
                    //cursor: { id: cursor },
                });

            return {
                ok:true,
                following,
            }
        }

        }, //end of query

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


    }//end of User


}