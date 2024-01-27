import { Users , Filters, User } from "../types/types";

export function searchUsers(users : Users, query:string, filters : Filters) {
    const lowercasedQuery = query.toLowerCase();
    let filteredUsers = users.results;
    
    if (filters.email && filters.phone) {
        filteredUsers = filterUsersByEmailAndPhone(filteredUsers, lowercasedQuery, query);
    } else if (filters.email) {
        filteredUsers = filterUsersByEmail(filteredUsers, lowercasedQuery);
    } else if (filters.phone) {
        filteredUsers = filterUsersByPhone(filteredUsers, query);
    } else {
        filteredUsers = filterUsersByName(filteredUsers, lowercasedQuery);
    }

    return {
        results: filteredUsers,
        info: users.info
    };
}

function filterUsersByEmail(users: User[], query: string): User[] {
    return users.filter((user) => user.email.toLowerCase().includes(query));
}

function filterUsersByPhone(users: User[], query: string): User[] {
    return users.filter((user) => user.phone.trim().includes(query));
}

function filterUsersByEmailAndPhone(users: User[], emailQuery: string,phoneQuery : string): User[] {
    return users.filter((user) =>
        user.email.toLowerCase().includes(emailQuery) || user.phone.trim().includes(phoneQuery)
    );
}

const filterUsersByName = (users : User[], query:string):User[] => {
    return users.filter(
        (user) =>
            user.name.first.toLowerCase().includes(query) ||
            user.name.last.toLowerCase().includes(query)
    );
}