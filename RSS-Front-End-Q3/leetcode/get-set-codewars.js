class Cube {
    constructor(length){
        this._length = length;
        this._volume = length ** 3;
        // this._volume = volume;
        // this._length = Math.cbrt(this._volume);
        // this._surfaceArea = (this.length ** 2) * 6;
    }

    get length(){
        return this._length;
    }

    get volume(){
        return this._volume;
    }

    set length(newLength) {
        this._length = newLength;
        this._volume = newLength ** 3;
    }

    set volume(newVolume) {
        this._volume = volume;
        this._length = Math.cbrt(newVolume);
        // this._surfaceArea = (this._length**2) * 6;
    }

    // get surfaceArea(){
    //     return this._surfaceArea;
    // }

    // set surfaceArea(newSurfaceArea) {
    //     this.surfaceArea = surfaceArea;
    // }
}

const cubeTest = new Cube(2)
console.log(cubeTest)
// cubeTest._length = 3
cubeTest._volume = 27
console.log(cubeTest)
// console.log(cubeTest._surfaceArea)

// console.log(cubeTest._length)
// console.log(cubeTest._volume)
// console.log(cubeTest._surfaceArea)
// cubeTest._length = 3


// console.log(cubeTest.Length)
// console.log(cubeTest.Volume)
// console.log(cubeTest.SurfaceArea)
