class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10, wisdom=10);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`what one programmer can do in one month, two programmers can do in two months.`)
    }
}

const sensei1 = new Sensei('Master Splinter')
sensei1.speakWisdom();
sensei1.showStats();