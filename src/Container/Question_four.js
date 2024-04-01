import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Question_four() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='btn-q'
            >
                How many users can participate in a OpenChat conversation?
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className='answer'>
                    There is no fixed limit on the number of participants in a product chat conversation. It can accommodate multiple users simultaneously, ensuring seamless communication and collaboration.
                </div>
            </Collapse>
        </>
    );
}

export default Question_four;