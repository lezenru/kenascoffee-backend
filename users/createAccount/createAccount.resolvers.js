import bcrypt from "bcrypt"
import client from "../../client";

export default {
    Mutation: {
        //계정 생성
        createAccount: async (_,
                              {
                                  name,
                                  username,
                                  email,
                                  password,

                                  location,
                                  avatarURL,
                                  githubUsername,


                              }
        ) => {

            try{
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                username,
                            },
                            {
                                email
                            }

                        ]
                    }
                });

                if(existingUser){
                    throw new Error("이 닉네임 또는 비밀번호는 이미 사용중입니다.")
                }

                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);

                // save and return user
                return client.user.create({
                    data:{
                        username,
                        email,
                        name,
                        password: uglyPassword,

                        location,
                        avatarURL,
                        githubUsername,
                    }
                })



            }catch (e){
                return e;
            }

        }, //end of createAccount
    } // end of mutation
} // end of export