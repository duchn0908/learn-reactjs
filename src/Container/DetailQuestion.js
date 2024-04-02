import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

// DetailQuestion.propTypes = {
//     detailQuestion: propTypes.object.isRequired,
// };
// console.log('detailquestion', detailQuestion);
function DetailQuestion({ data }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='btn-q'
            >
                <p>{data.question}</p>
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className='answer'>
                    <p>{data.answer}</p>
                </div>
            </Collapse>

        </>

    )
}
export default DetailQuestion;