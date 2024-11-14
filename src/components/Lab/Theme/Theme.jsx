import { useState, useEffect, useContext, useRef } from "react";

import "./Theme.css"

import TextInput from "../../generic/UserInputs/TextInput";
import Button from "../../generic/UserInputs/Button";
import BottomSheet from "../../generic/PopUps/BottomSheet";

export default function Test() {

    const [saved_theme_list,set_saved_theme_list] = useState(JSON.parse(localStorage.getItem("theme_list")))
    const [typed_theme, set_typed_theme] = useState("")
    const [isErrorSheet, setErrorSheet] = useState(false);

    const required_keys = ["css","name","id","author","edp_ver","logo"]

    function push_saved_theme_list() {
        localStorage.setItem("theme_list",JSON.stringify(saved_theme_list))
    }

    function test_json(data) {
        try {
            const parsed = JSON.parse(data);
            return required_keys.every(key => key in parsed)
         } catch (error) {
            return false
        }
    } 

    function add_json_to_list() {
        if (test_json(typed_theme)) {
            const parsed = JSON.parse(typed_theme)
            if (Array.isArray(saved_theme_list)) {
                saved_theme_list.push(parsed)
                push_saved_theme_list()
            } else {
                set_saved_theme_list([parsed])
                push_saved_theme_list()
            }

        } else {
            setErrorSheet(true)
        }
    }


    return (
        <div id="theme">
            <div id="theme-container">
                <h1>Thème</h1>
                <div>{(saved_theme_list == null) ? saved_theme_list : String(saved_theme_list)}</div>
                <div>{typed_theme}</div>
                <TextInput textType="text" placeholder="Paste your Theme JSON Here!" value={typed_theme} onChange={(e) => set_typed_theme(e.target.value)} />
                <Button onClick={() => add_json_to_list()}>Save Theme to list!</Button>
            </div>
            {isErrorSheet && <BottomSheet heading="Error!" onClose={() => setErrorSheet(false)}>
                <h4>Malformed JSON</h4>
                <p>The json you entered is not valid</p>
                <p>Please try again with a new json.</p>
            </BottomSheet>}
        </div>

        
    );
};


