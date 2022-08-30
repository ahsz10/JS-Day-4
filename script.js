// Lab 5
// Task 0
class PersonClass{
    constructor(name,money) {
        this.name = name;
        this.money = money;
        this.sleepMood;
        this.healthRate;
    }

    eat(meals){
        if(meals === 3){
            this.healthRate= 100;
        }else if(meals === 2){
            this.healthRate= 75;
        }else if(meals === 1){
            this.healthRate= 50;
        }else{
            console.log("Invalid input");
        }
    }

    sleep(hours){
        if(hours > 0){
            if(hours === 7){
                this.sleepMood= "happy";
            }else if(hours < 7){
                this.sleepMood= "tired";
            }else if(hours >7){
                this.sleepMood= "lazy";
            }
        }else{
            console.log("Invalid input");
        }
    }

    buy(itemNum){
        this.money-= (10*itemNum);
    }
}

// Task 1


////////// Calling Tasks Funtions //////////

// Task 0 
console.log("Class");
var iti2 = new PersonClass("ahmed",100);
// iti2.eat(3);
// iti2.buy(4);
// iti2.sleep(7);
// console.log(iti2);

// Task 