import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Question_two() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='btn-q'
            >
                Is the OpenChat encrypted and secure?
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className='answer'>
                    Yes, we take data security seriously. Our product chat uses encryption protocols to protect messages and user information, ensuring a secure communication environment.
                </div>
            </Collapse>
        </>
    );
}

export default Question_two;