import React from 'react'

/* The switch - the box around the slider */


function Switch() {
  return (
    <div>
            
         {/* Rectangular switch */}
        <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
        </label>

        {/* Rounded switch */}
        <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
   
    </div>
  )
}

export default Switch