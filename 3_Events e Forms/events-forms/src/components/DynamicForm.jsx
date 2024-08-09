import { useState } from "react";

const DynamicForm = () => {
    const [fields, setFields] = useState(['']);

    const handleChange = (i, e) => {
        const values = [...fields];
        values[i] = e.target.value;
        setFields(values);
    };

    const handleAdd = () => {
        const values = [...fields];
        values.push("");
        setFields(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {fields.map((field, i) => (
                    <div key={i}>
                        <input type="text" value={field} onChange={(e) => handleChange(i, e)} />
                    </div>
                ))}
                <input type="submit" value="Send" />
            </form>
            <button onClick={handleAdd}>New Field</button>
        </>
    );
};

export default DynamicForm;
