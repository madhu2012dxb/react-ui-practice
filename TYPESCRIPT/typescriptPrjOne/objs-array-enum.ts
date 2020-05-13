/*const person:object={
    name: 'madhu',
    age:39
}
const person:{}={
    name: 'madhu',
    age:39
}

console.log('name:'+person.name);
*/
/*const person:{
    name:string;
    age:number;
}={
    name: 'madhu',
    age:39
}
*/
//tuple
/*const person:{
    name:string;
    age:number;
    hobbies:string[];
    roles:[number,string];
}={
    name: 'madhu',
    age:39,
    hobbies:['Cricket','Movies'],
    roles:[1,'admin']
}
person.roles=[2,'mad'];
//person.roles.push(1);
console.log('name:'+person.name);
console.log('hobbies:'+person.hobbies);
for(const hobby of person.hobbies){
    console.log('Hobby:'+hobby);
}
*/

/*enum Role {
    ADMIN,READ_ONLY_USER,GUEST
}
*/
/*
enum Role {
    ADMIN ='AA',READ_ONLY_USER=10,GUEST=11
}
*/
enum Role {
    ADMIN =5,READ_ONLY_USER=10,GUEST=11
}
const person={
    name: 'madhu',
    age:39,
    hobbies:['Cricket','Movies'],
    role:Role.ADMIN
}

if(person.role === Role.ADMIN){
    console.log('Role Assigned is:'+person.role);
}