import React from 'react'

/* The switch - the box around the slider */

function Switch() {
  return (
    <div>   
      {/* Rectangular switch */}
      <div className="SwitchWrapper">
        <p>Note</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
        <p>Contact</p>
      </div>

      {/* Rounded switch */}
      <div className="SwitchWrapper">
        <p>Note</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Switch