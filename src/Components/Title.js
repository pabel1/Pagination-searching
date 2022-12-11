import React from 'react'

function Title() {
    console.log("tile is rendering....");

  return (
    <div>
        <h2>useCallBack hook learning</h2>
    </div>
  );
}
export default React.memo(Title) ;