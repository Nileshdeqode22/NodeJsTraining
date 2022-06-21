
const user1=require('./classmodules.js');

const user=new user1('John','qw@gmail.com');

user.enrollCourse("JavaScript");
user.enrollCourse("HTML");
user.enrollCourse("CSS");


console.log(user.getCourseList());
console.log(user.getCourseCount());
console.log(user.getInfo());
















