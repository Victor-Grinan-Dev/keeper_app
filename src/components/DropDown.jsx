import React, { useState } from "react";

function DropDown({ options, callback }) {
    const [selected, setSelected] = useState("");
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    function select(event) {
        const value = event.target.textContent;
        callback(value);
        close();
        setSelected(value);
    }

    return (
        <div className="dropdown" tabIndex={0} onFocus={expand} onBlur={close} >
            <div>{selected}</div>
            {expanded ? (
                <div className={"dropdown-options-list"}>
                    {options.map((O) => (
                        <div className={"dropdown-option"} onClick={select}>
                            {O}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}


export default DropDown