import { React, useState } from 'react';
import Select from 'react-select';
import './dropdown.css';
function Cia ()
{
    const colors = [
        {
            id: 1,
            label: "red",
        },
        {
            id: 2,
            label: "aqua",
        },
        {
            id: 3,
            label: "crimson",
        },
        {
            id: 4,
            label: "blanchedalmond",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "rebeccapurple",
        },
        {
            id: 7,
            label: "hotpink",
        },
        {
            id: 8,
            label: "darkorchid",
        },
        {
            id: 9,
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdown'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>CHOOSE A FAVOURITE COLOR</h1>
            </center>
            
            <div className="Container">
                <Select options={colors} onChange={click} className='select' placeholder="PICK A COLOR"></Select>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Cia;