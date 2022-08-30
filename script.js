// Lab 4
// Task 1
function PersonConFunction(name, money){
    this.name = name;
    this.money = money;
    this.sleepMood;
    this.healthRate;

    function sleep(hours){
        if(hours < 0){
            if(hours === 7){
                sleepMood= "happy";
            }else if(hours < 7){
                sleepMood= "tired";
            }else if(hours >7){
                sleepMood= "lazy";
            }
        }else{
            console.log("Invalid input");
        }        
    }
}
Object.assign(PersonConFunction.prototype, {
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
    },

    buy(itemNum){
        this.money-= (10*itemNum);
    },

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
})

// Task 2

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

// Task 3
function PersonFacFunction (name, money,sleepMood,healthRate) {
  return {
        name,
        money,
        sleepMood,
        healthRate,

        sleep(hours){
            if(hours > 0){
                if(hours === 7){
                    return this.sleepMood= "happy";
                }else if(hours < 7){
                    return this.sleepMood= "tired";
                }else if(hours >7){
                    return this.sleepMood= "lazy";
                }
            }else{
                console.log("Invalid input");
            }
        },

        eat(meals){
            if(meals === 3){
                return this.healthRate= 100;
            }else if(meals === 2){
                return this.healthRate= 75;
            }else if(meals === 1){
                return this.healthRate= 50;
            }else{
                console.log("Invalid input");
            }
        },

        buy(itemNum){
            return this.money-= (10*itemNum);
        }
    }
}

// Task 4

const PersonOloo = {
    init (name, money,hours,meals,itemNum){
        this.name = name
        this.money = money;
        this.sleepMood=function(){
            if(hours >= 0){
                if(hours === 7){
                    return this.sleepMood= "happy";
                }else if(hours < 7){
                    return this.sleepMood= "tired";
                }else if(hours >7){
                    return this.sleepMood= "lazy";
                }
            }else{
                console.log("Invalid input");
            }

        }

        this.healthRate=function(){
            if(meals === 3){
                return this.healthRate= 100;
            }else if(meals === 2){
                return this.healthRate= 75;
            }else if(meals === 1){
                return this.healthRate= 50;
            }else{
                console.log("Invalid input");
            }
        }

        this.buy = function(){
            return this.money - (10*itemNum);
        }
        return this
    }
}

////////// Calling Tasks Funtions //////////

// Task 1 
console.log("Constructor function");
var iti1 = new PersonConFunction("ahmed",100);
iti1.eat(2);
iti1.buy(6);
iti1.sleep(9);
console.log(iti1);

// Task 2 
console.log("Class");
var iti2 = new PersonClass("ahmed",100);
iti2.eat(3);
iti2.buy(4);
iti2.sleep(7);
console.log(iti2);

// Task 3
console.log("Factory Function");
var iti3 = new PersonFacFunction("ahmed",100, 0,10);
console.log(iti3);
console.log(iti3.eat(3)) 
console.log(iti3.sleep(3))
console.log(iti3.buy(8))
console.log(iti3.eat(3))

// Task 4
console.log("Objects Linking to Other Objects (OLOO)");
var iti4 = Object.create(PersonOloo).init("ahmed",100,7,3,8);
console.log( iti4.buy(4));
console.log(iti4.sleepMood(7));
console.log(iti4.healthRate(3));
console.log(iti4);