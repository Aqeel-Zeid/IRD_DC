import React from "react";

export default function Checkbox({ Text, Disabled }) {
  return (
    <div>
      <label className ="CheckboxContainer">
        {Text}
        <input type="checkbox" disabled={Disabled} />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
