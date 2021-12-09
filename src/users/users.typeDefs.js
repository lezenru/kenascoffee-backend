import {gql} from "apollo-server";

//비밀번호는 여기서 다루지 않음
export default gql`
    type User{
        id: String!
        
        name: String!
        username: String
        email: String!

        location: String
        avatarURL: String
        githubUsername: String
        
        following: [User]
        followers: [User]
        
        totalFollowing: Int!
        totalFollowers: Int!


    }
   
    
   
    
`;

