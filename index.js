// Your code here

class Polygon{
    constructor(arr){
        this.sides = arr
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((element, acc) => acc += element)
    }   
}

class Triangle extends Polygon{
    get isValid(){
        if(this.sides[0]+this.sides[1] > this.sides[2] && this.sides[0]+this.sides[2] > this.sides[1] && this.sides[1]+this.sides[2] > this.sides[0]){
            return true
        }
        else{
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if((this.perimeter)/4 === this.sides[0]){
            return true
        }
        else {
            return false
        }
    }

    get area(){
        return this.sides[0]*this.sides[1]
    }
}