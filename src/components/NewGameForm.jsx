import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addGame({ title, cover });
        setTitle("");
        setCover("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextInput  id="title" label="titulo:" value={title} setValue={setTitle}/>
                 <TextInput id="cover"  label ="capa:" value={cover} setValue={setCover}/>
            </div>
            
            <button type="submit">Adicionar jogo</button>
        </form>
    );
}

NewGameForm.propTypes = {
    addGame: PropTypes.func
};
