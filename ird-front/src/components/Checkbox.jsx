import React from "react";

export default function Checkbox({ Type, Text, Disabled }) {
  return (
    <div>
      <label class="CheckboxContainer">
        {Text}
        <input type="checkbox" disabled={Disabled} />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
