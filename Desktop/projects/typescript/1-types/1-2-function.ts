{
    //JavaScript 
    function jsAdd(num1, num2) {
        return num1 + num2
    }

     //TypeScript 
     function add(num1: number, num2: number): number{
        return num1 + num2
    }
    // number 타입의 인자 num1, num2를 만나서 number 타입의 리턴문을 만난다.

   
    //JavaScript 
    function jsFetchNum(id) {
        //code ...
        //code ...
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }

     //TypeScript 
     function tsFetchNum(id: string): Promise<number> {
        //code ...
        //code ...
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }
}
