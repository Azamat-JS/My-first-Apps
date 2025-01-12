// type Address = {city:string, street:string, houseNum:number}

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address?: Address
// };

// let person1: Person = {
//   name: "Peter",
//   age: 23,
//   isStudent: true,
// };

// let person2: Person = {
//   name: "John",
//   age: 21,
//   isStudent: false,
//   address: {
//     city: "Urgench",
//     street:"Milliy",
//     houseNum: 12
//   }
// };

// let ages:number[] = [100, 60, 50]
// let people:Person[] = [person1, person2]
// let people2:Array<Person> = [person1, person2]
//----------------------- literal types -------------
type UserRole = "guest" | "member" | "admin";
let nextUserId:number = 1

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdateUser = Partial<User>

let users: User[] = [
  { id: nextUserId++, username: "Ruzim", role: "admin" },
  { id: nextUserId++, username: "Jasur", role: "member" },
  { id: nextUserId++, username: "Ruzim", role: "guest" },
];

//---------- UPDATE user's info --------------
function updateUser(id: number, updates: UpdateUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return `there is no user with id: ${id}`;
  }
  const updatedUser = Object.assign(foundUser, updates);
  return updatedUser;
}
updateUser(2, {username:'Amir', role:'admin'})
updateUser(3, {username:'Ilyos'})
updateUser(1, {role:'guest'})

//----------- GET info on User ----------------
function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
}
// console.log(fetchUserDetails("Ruzim"));

//------------ ADD new user -------------
function addNewUser(newUser:Omit<User, "id">):User{
  const user: User = {
    id: nextUserId++,
    ...newUser
  }
  users.push(user)
  return user
}
addNewUser({username: "Sarvar", role: "member"})
addNewUser({username: "Utkir", role: "admin"})
console.log(users);