class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (n === this.number & this.lives > 0){
            return true;
        } else {
            if (this.lives > 0){
                this.lives -= 1;
                return false;
            } throw 'Already dead!'
        }
    }
}

const guesser = new Guesser(10, 2);

guesser.guess(2)
guesser.guess(1)
console.log(guesser.guess(10))