import {gql} from "apollo-server";

/* typeDef 에서는 비밀번호를 다루지 않음 */

export default gql`
    type User{
        id: String!
        
        name: String!
        username: String!
        email: String!

        location: String
        avatarURL: String
        githubUsername: String
        
        following: [User]
        followers: [User]
        
        totalFollowing: Int!
        totalFollowers: Int!

        isMe: Boolean!
        isFollowing:Boolean!
    }
   
    
   
    
`;

