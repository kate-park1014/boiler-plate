{
    /* 
    * Type Aliases 
    */
    type Text = string;
    const name: Text = 'elle';
    const address: Text = 'korea';
    type Num = number;
    // 원시 타입 뿐만 아니라 object도 가능하다.
    type Student = {
        name: string;
        age: number;
    }
    const student: Student ={
        /* animal : 3  이런거 넣으면 에러 */
        name: 'elle',
        age: 3

    }

    // * String Literal Types

    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name'

    type JSON = 'json'
    const json: JSON = 'json';

    type Boal = true;
    const dd: Boal = true
}