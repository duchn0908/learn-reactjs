import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import DetailQuestion from "./DetailQuestion";

QA.propTypes = {};
function QA(props) {
    const questionList = [
        {
            id: 1,
            question: 'How can i start using the OpenChat?',
            answer: `To start using the product chat feature, simply sign up for an account on our platform and follow the integration instructions provided. You'll be up and running in no time`
        },
        {
            id: 2,
            question: 'Is the OpenChat encrypted and secure?',
            answer: `Yes, we take data security seriously. Our product chat uses encryption protocols to protect messages and user information, ensuring a secure communication environment.`
        },
        {
            id: 3,
            question: 'Does the OpenChat support file sharing and attachments?',
            answer: `Certainly! Our product chat typically supports file sharing and attachments, allowing users to exchange documents, images, and other files within the chat interface.`
        },
        {
            id: 4,
            question: 'How many users can participate in a OpenChat conversation?',
            answer: `There is no fixed limit on the number of participants in a product chat conversation. It can accommodate multiple users simultaneously, ensuring seamless communication and collaboration.`
        },
        {
            id: 5,
            question: 'Can I gather customer feedback or ratings through the OpenChat?',
            answer: `Yes, our product chat may include features that allow you to collect customer feedback or ratings directly within the chat interface, providing valuable insights for improving your services.`
        },
    ];

    return (
        <>

            {questionList.map(data => (
                <div className="each-question">
                    <DetailQuestion data={data} />
                </div>
            ))
            }
        </>
    );
}

export default QA;