{
    /* 
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined 
    * Object: function, array...
   */

    //number
    const num: number  = -6;

    //string
    const str: string = 'hello';

    //boolean
    const boal: boolean = false;

    //undefined
    let name: undefined; // 💩  
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
       /*  return 1; */
    }

    //null
    let person: null; // 💩
    let person2: string | null;

    //unknown // 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    notSure = 3;


    // any // 💩
    let anything: any = 0;
    anything = 'hello';
    anything = undefined;

    //void : 타입 명시 생략 가능, 아무것도 return 해주지 않을때
    function print() : void {
        console.log('hey')
        return;
    }

    let unusable: void = undefined; // 💩 
    

    //never : 에러 던질때 return; 절대 사용하지 않고 에러던질때, while문에서 사용가능
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
       /*  while(true) {

        } */
    }
    let neverEnding: never; // 💩

    //object
    let obj: object = [1,2]; // 💩
    function acceptSomeObject(obj: object) {
        acceptSomeObject({ name: 'elle'});
        acceptSomeObject({ animal: 'dog'});
    }

    
}