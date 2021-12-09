import bcrypt from "bcrypt"
import client from "../../client";
import jwt from "jsonwebtoken";

export default {
    Mutation: {

        //로그인
        login: async (_,{username, password}) => {
            const user = await client.user.findUnique({
                where: {username}
            });


            if (!user){
                return{
                    ok: false,
                    error: "해당 아이디를 찾지 못했습니다",
                };
            }


            const passwordOk = await bcrypt.compare(password, user.password)
            if(!passwordOk){
                return {
                    ok: false,
                    error: "비밀번호가 틀렸습니다"
                }
            }

            const token = await jwt.sign({id:user.id}, process.env.SECRET_KEY);
            console.log("TOKEN : "+token);
            return {
                ok: true,
                token
            }
        }







    } // end of mutation
} // end of export