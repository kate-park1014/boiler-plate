{
  /*
   * Union Types : OR
  */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const title:TileSize = 8;

    /*
    * 📝 function: login -> success, fail
    */
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }
    
    type LoginState = SuccessState | FailState;
                                                // Promise<LoginState>
    function login(id: string, password: string):  LoginState {
        return {
            response: {
                body: 'logged in!!'
            }
        }
    }

    // printLoginState(state: LoginState)
    // 아무것도 리턴하지 않음, console.log만 리턴가능
    // success -> 🎉 body
    // fail -> 😂  reason
  /*   function printLoginState(state: LoginState): LoginState {
       if (this.type === SuccessState) {
           return {
               response: {
                   body: '🎉'
               }
           }
       }else {
           reason: '😂'
       }
    } */


}