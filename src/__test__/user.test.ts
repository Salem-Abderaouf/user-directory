import { User, Users } from "../types/types";


describe('searchUsers', () => {

    const testUser: User = {
      id: {
        value: '12345',
      },
      name: {
        first: 'John',
        last: 'Doe',
      },
      login: {
        uuid: 'abc-123',
      },
      gender: 'male',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      picture: {
        large: 'https://example.com/large.jpg',
        medium: 'https://example.com/medium.jpg',
        thumbnail: 'https://example.com/thumbnail.jpg',
      },
    };
  
    const testUsers: Users = {
      results: [testUser],
      info: {
        seed: 'randomSeed',
        results: 1,
        page: 1,
        version: '1.0',
      },
    };
    console.log(testUsers)
    // TODO: Write a test for each of the following cases:
    // 1. Search by first name
    // 2. Search by last name
    // 3. Search by full name
    // 4. Search by email
    // 5. Search by phone
  
  });