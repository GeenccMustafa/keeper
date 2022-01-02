import React from "react";
import Entry from "./Entry";
import notes from "../notes";



function Note(){
    return (
        <div>
            {notes.map((note) =>
            <Entry 
                key = {note.key}
                title = {note.title}
                content = {note.content}
                />
                )}
        </div>
    )
}

export default Note;
