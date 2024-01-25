export interface User {
    id: {
      value: string;
    };
    name: {
      first: string;
      last: string;
    };
    login:{
        uuid:string;
    },
    gender: string;
    phone: string;
    email: string;
    picture : {
        large : string;
        medium : string;
        thumbnail : string;
    }
}

export interface Users {
    results:User[],
    info:{
      seed:string,
      results:number,
      page:number,
      version:string
    }
}

export interface Filters {
    email:boolean,
    phone:boolean
}