 class User{
    
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    courseList=[];

    getInfo(){
         return `${this.name} ${this.email}`;
    }

    enrollCourse(course){
        this.courseList.push(course);
    }
    
    getCourseList(){    
        return this.courseList;
    }

    getCourseCount(){
        return this.courseList.length;
    }

    
 }

module.exports=User