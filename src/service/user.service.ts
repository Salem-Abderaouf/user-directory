import { Users , Filters } from "../types/types";

export function searchUsers(users : Users, query:string, filters : Filters) {

    let filteredUsers = users.results;
    switch(true) {
        
        case filters.email:
        filteredUsers = filteredUsers.filter(user => 
            user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
        break;

        case filters.phone:
        filteredUsers = filteredUsers.filter(user =>
            user.phone.includes(query)
        );
        break;
        
        default:
        filteredUsers = filteredUsers.filter(user => 
            user.name.first.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
            user.name.last.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
    }

    return {
        results: filteredUsers,
        info: users.info
    };

}