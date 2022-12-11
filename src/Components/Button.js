
import React from 'react';
function Button({handler,children}){
    console.log(`rendering ${children}`);
    return (
    <div>
        <p>
            <button  type="button" onClick={handler}>{children} </button>
        </p>

    </div>
    );
}
export default React.memo(Button);