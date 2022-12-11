import React from 'react'
function InputCompo(ref) {
  return (
    <div>
        <input ref={ref}type="text"  placeholder="Enter Your First Name"/>

    </div>
  )
}
const inputref= React.forwardRef(InputCompo);
export default inputref;
