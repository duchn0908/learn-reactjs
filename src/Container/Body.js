import icon2 from "../Img/banner-icon-arrow.svg"
import icon from '../Img/banner-icon-chat.webp'
import icon1 from "../Img/banner-icon-ring.svg"
import icon3 from '../Img/flashlight-line.svg'
import mockup from '../Img/mockup-iphone.webp'
import QA from "./QA"

const Body = () => {
    return (<>
        <div className="body">
            <div className="container">
                <div className='slogan'>
                    <div className='icon'><img src={icon} alt='icon' className='icon' ></img></div>
                    <div className='slogan1'><span>Unleash the Power </span></div>
                    <div className='slogan1'><span> of Seamless Messaging</span></div>
                    <div className='slogan2'>
                        <span>
                            Maximize productivity and streamline communication with our comprehensive messaging solution
                        </span>
                    </div>
                    <div className='register'>
                        <div className='icon1'>
                            <img src={icon1} alt='icon1'  ></img>
                        </div>
                        <div className="div_btn-try-it-now">
                            <button className='btn-try-it-now'>Try it now</button>
                        </div>
                        <div className='icon2'>
                            <img src={icon2} alt='icon2'  ></img>
                        </div>
                    </div>
                </div>
                <div className="all-your-chats-in-one-app">
                    <div className="col-12">
                        <div className="col-container">
                            <img src={icon3} alt='flashlight' className='icon3' ></img>
                            <div className="slogan3">
                                <span>All your chats in one app</span>
                            </div>
                            <div className="slogan4">
                                <span>
                                    Say goodbye to the hassle of juggling multiple apps, because now you can effortlessly connect with everyone using just one comprehensive application
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-12">
                        <img src={mockup} alt='mockup-iphone' className='mockup-iphone' ></img>
                    </div>
                </div>
                <div className="safety">
                    <div className="text1"><span>Safety, security and convenience</span></div>
                    <div className="text2"><span>are what we provide.</span></div>
                </div>
                <div className="question">
                    <div className="title">
                        <span>Frequently Asked Questions</span>
                    </div>
                    <div className="detail">
                        <QA />
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
export default Body;