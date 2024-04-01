import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Question_one() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='btn-q'
            >
                How can i start using the OpenChat?
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className='answer'>
                    To start using the product chat feature, simply sign up for an account on our platform and follow the integration instructions provided. You'll be up and running in no time!
                </div>
            </Collapse>
        </>
    );
}

export default Question_one;