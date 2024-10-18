class Calc {
    private num: number; 
    private num2: number;

    constructor(){
        this.add( this.num, this.num2);
    }

    public add (num: number , num2: number){
        return num + num2
    }
}
export default new Calc();