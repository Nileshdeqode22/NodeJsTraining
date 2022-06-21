class Animal
{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    walk(){
        return "I can walk";
    }


    getInfo(){

        return `${this.name} is ${this.age} years old`;
    }

    getName(){
        return this.name;
    }
    getAge(){

        return this.age;
    }

    setName(name){
        this.name = name;
    }
    setAge(age){

        this.age = age;
    }

    static getClassName(){
        return "Animal";
    }


}

class Birds extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }

    fly()
    {
        return "I can fly";
    }


    getInfo(){
        return `${this.name} is ${this.age} years old and is ${this.color}`;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
}

const bird = new Birds("Parrot", 2, "Green");

console.log(bird.getInfo());
console.log(bird.getColor());
console.log(bird.getName());
console.log(bird.getAge());
console.log(bird.walk());
console.log(bird.fly());



