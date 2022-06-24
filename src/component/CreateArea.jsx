import React, { useState } from "react";


function CreateArea(props) {

    const [note, setNote] = useState({ title: "", content: "" })

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prev) => {
            return { ...prev, [name]: value }
        })


    }
    function handleClick(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({ title: "", content: "" });

    }

    return <div>
        <form className="create-note">
            <input onChange={handleChange} name="title" type="text" placeholder="Add Title" value={note.title} />
            <input onChange={handleChange} name="content" type="textArea" placeholder="Add Content" value={note.content} />
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
}

export default CreateArea;