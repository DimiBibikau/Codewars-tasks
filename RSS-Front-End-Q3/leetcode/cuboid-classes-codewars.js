class Cuboid {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.height * this.width);
    }

    volume(){
        return this.length * this.width * this.height;
    }
}

const exampleCuboid = new Cuboid(1, 2, 3);
console.log(exampleCuboid.surfaceArea(), exampleCuboid.volume())

class Cube extends Cuboid{
    constructor(length) {
        super(length)
        this.length = length;
        this.height = length;
        this.width = length;
    }
}

const exampleCube = new Cube(10);
console.log(exampleCube.surfaceArea(), exampleCube.volume())
