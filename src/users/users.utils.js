import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {

    try{
        if (!token){
            return null;
        }

        const { id } = await jwt.verify(token, process.env.SECRET_KEY); //verifiedToken 의 id를 꺼내서 쓰는 것

        const user = await client.user.findUnique({
            where: {id}
        });

        if (user){
            return user;
        } else {
            return null;
        }
    } catch {
        return null;
    }
};


export function protectResolver(ourResolver){
    return function (root, args, context, info){
        if (!context.loggedInUser){
            return {
                ok: false,
                error: "로그인이 필요합니다",
            };
        };

        return ourResolver(root, args, context, info);

    };

}


