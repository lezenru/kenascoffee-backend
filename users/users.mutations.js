import bcrypt from "bcrypt"
import client from "../client";

export default {
    Mutation: {
        createAccount: async (_,
                        {
                firstName,
                lasName,
                username,
                email,
                password,

                        }
            ) => {
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
            // hash password
            const uglyPassword = await bcrypt.hash(password, 10);
            console.log(uglyPassword)
            // save and return user
            return client.user.create({
                data:{
                    username,
                    email,
                    lasName,
                    firstName,
                    password: uglyPassword,
                }
            })
        }

    }
}