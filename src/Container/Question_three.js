import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Question_three() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='btn-q'
            >
                Does the OpenChat support file sharing and attachments?
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className='answer'>
                    Certainly! Our product chat typically supports file sharing and attachments, allowing users to exchange documents, images, and other files within the chat interface.
                </div>
            </Collapse>
        </>
    );
}

export default Question_three;