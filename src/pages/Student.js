import React from "react";

const Student = (props) => {
    return (
<>
<div>
    <h2>{props.name}</h2>
    <h2>{props.course}</h2>
    <h2>{props.email}</h2>
</div>

<button class="bg-indigo-500 ...">
  Save changes
</button>
</>
    )
}
export default Student
