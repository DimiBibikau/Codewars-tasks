class Cube {
    constructor(length){
        this._length = length;
        this._volume = this._length ** 3;
        this._surfaceArea = (this._length ** 2) * 6;
    }

    get length(){
        return this._length;
    }

    get volume(){
        return this._volume;
    }

    get surfaceArea(){
        return this._surfaceArea;
    }

    set length(newLength) {
        this._length = newLength;
        this._volume = this._length ** 3;
        this._surfaceArea = (this._length ** 2) * 6;
    }

    set volume(newVolume) {
        this._volume = newVolume;
        this._surfaceArea = (Math.cbrt(this._volume)) ** 2 * 6;
        this._length = Math.cbrt(this._volume);
    }

    set surfaceArea(newSurfaceArea) {
        this._surfaceArea = newSurfaceArea;
        this._volume = (Math.sqrt(this._surfaceArea / 6))**3;
        this._length = Math.sqrt(this._surfaceArea / 6);
    }
}

const cubeTest = new Cube(1)
console.log(cubeTest)
cubeTest._length = 3
cubeTest._volume = 9
cubeTest._surfaceArea = 54

console.log(cubeTest.length)
console.log(cubeTest.volume)
console.log(cubeTest.surfaceArea)
console.log(cubeTest)

