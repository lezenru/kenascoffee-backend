import {gql} from "apollo-server";

export default gql`
    
    type SeeFollowersResult {
        ok: Boolean!
        error: String
        followers: [User]
        totalPages: Int
    }
    
    type SeeFollowingResult {
        ok: Boolean!
        error: String
        following: [User]
    }
    
    type SeeUserResult {
        ok:Boolean!
        error: String
        
        followers: [User]
        following: [User]
        
        totalFollowersPages: Int
        totalFollowingPages: Int
        
    }
    

    type Query {
        seeFollowers(username:String!, page:Int) : SeeFollowersResult!
        seeFollowing(username: String!, lastId: Int) : SeeFollowingResult!
        seeUser(username:String!, page:Int) : SeeUserResult!
        }





`;