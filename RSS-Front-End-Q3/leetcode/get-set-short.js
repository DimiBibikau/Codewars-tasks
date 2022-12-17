
class Cube {
    constructor(length){
        this._length = length;
        this._volume = this._length ** 3;
    }

    get length(){
        return this._length;
    }

    get volume(){
        return this._volume;
    }

    set length(newLength) {
        this._length = newLength;
        this._volume = this._length ** 3;
    }

    set volume(newVolume) {
        this._volume = newVolume;
        this._length = Math.cbrt(_volume);
    }
}

const cubeTest = new Cube(1)
cubeTest._volume = 9
console.log(cubeTest.length)
console.log(cubeTest.volume)
console.log(cubeTest)

