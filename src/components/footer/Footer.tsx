import React from 'react'
import './footer.scss'

const Footer: React.FC = () => {
    return (
        <div className={'footer'}>
            <div className={'footer_left'}>
                <div className="left_top">
                    <p>Developed by EPIC GAMES</p>
                    <div className="left_img">
                        <img src="./img/facebook.png" alt=""/>
                        <img src="./img/twitter.png" alt=""/>
                        <img src="./img/youtube.png" alt=""/>
                    </div>
                    <div className="left_txt">
                        <ul>
                            <li>Resource</li>
                            <li>Creator Support</li>
                            <li>Published On Epic</li>
                            <li>Profession</li>
                            <li>Company</li>
                        </ul>
                        <ul>
                            <li>Fan Work Policy</li>
                            <li>User Exp Service</li>
                            <li>User Liscence</li>
                        </ul>
                        <ul>
                             <li>Online Service</li>
                             <li>Community</li>
                             <li>Epic Newsroom</li>
                         </ul>
                        <ul>
                            <li>Battle Breakers</li>
                            <li>Fortnite</li>
                            <li>Infinity Blade</li>
                        </ul>
                        <ul>
                            <li>Robo Recall</li>
                            <li>Shadow Complex</li>
                            <li>Unreal Tournament</li>
                        </ul>

                    </div>
                </div>
                <div className="left_bottom">
                    <p>
                        © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, Epic Games logo, Fortnite, Fortnite logo, Unreal, Unreal Engine,
                        <br/> Unreal Engine logo, Unreal Tournament ) and the Unreal Tournament logo are trademarks or registered trademarks of Epic
                        <br/> Games, Inc. in the United States of America and elsewhere. Other brand or product names are trademarks of their respective
                        <br/> owners. Transactions outside the United States are handled through Epic Games International, S.à r.l..
                    </p>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Store Refund Policy</li>
                    </ul>
                </div>
            </div>
            <div className={'footer_right'}>
                <div className="right_top">
                    <img src="./img/strelka3.png" alt=""/>
                    <img src="./img/ddd.png" alt=""/>
                </div>
                <div className="right_bottom">
                    <img src="./img/icon2.png" alt=""/>
                </div>
            </div>

        </div>

    )
};

export default Footer