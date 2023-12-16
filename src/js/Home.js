import React from 'react'
import '../css/Home.css'
import Logo from '../img/Group 1000003960.png'
import ang from '../img/United States of America (US).png'
import { IoIosArrowDown } from "react-icons/io";
import rus from '../img/Group.png'
import { IoMenuSharp } from "react-icons/io5";
import Logo2 from '../img/logo.png'
import bottom_header_img from '../img/Blur Mask.png'
import bottom_header_img1 from '../img/Blur Mask (1).png'
import hosting1 from "../img/Hosting.png"
import rasm11 from "../img/feature-1 (1) 2.png"
import rasm22 from "../img/image 3.png"
import rasm33 from "../img/image 1.png"
import s from "../Header.module.css"
import headerimg from "../image/image.png"
import img1 from "../image/Arrow 1.png"
import img2 from "../image/Group 1000003496.png"
import img3 from "../image/fluent_scan-person-24-regular.png"
import img4 from "../image/raphael_paper.png"
import img5 from "../image/Group 1000003496.png"
import img6 from "../image/FXM.png"
import img7 from "../image/Icon.png"
import img8 from "../image/Icon (1).png"



export default function Home() {
    function ang_lang() {
        document.querySelector(".for_lang_bottom").style="display:block"
        document.querySelector(".for_none_lang").style="display:block"
        document.querySelector(".lang_arrow").style="transform: rotate(180deg);"
    }
    function ang_lang_back() {
        document.querySelector(".for_lang_bottom").style="display:none"
        document.querySelector(".for_none_lang").style="display:none"
        document.querySelector(".lang_arrow").style="transform: rotate(0deg);"
    }



  return (
    <div>
        <div className="Home_main">
            <div className="navbar">
                <div className="navbar_in">
                <IoMenuSharp className='navbar_manu' />
                <img className='logo1' src={Logo} alt="" />
                <img className='logo2' src={Logo2} alt="" />
                <ul className='navbar_ul'>
                    <li>Roadmap</li>
                    <li>Tokenomics</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Whitepaper</li>
                </ul>
                <div className="languages">
                    <div onMouseEnter={()=> ang_lang()} className="for_none_lang"></div>
                    <div onMouseLeave={()=>ang_lang_back()} className="for_lang_bottom">
                        <div id='for_eng_lan' className="for_eng_lan">
                            <img className='rus' src={rus} alt="" />
                            <h2 className='which_lang'>Rus</h2>
                        </div>
                        <div className="for_eng_lan">
                            <img className='rus' src={ang} alt="" />
                            <h2 className='which_lang'>Eng</h2>
                        </div>
                    </div>
                    <div onMouseEnter={()=> ang_lang()} onMouseLeave={()=>ang_lang_back()} className="eng_lan">
                        <img className='rus' src={ang} alt="" />
                        <h2 className='which_lang'>Eng</h2>
                        <IoIosArrowDown className='lang_arrow' />
                    </div>
                </div>
                <button>Buy now</button>
                </div>
            </div>
            <div className={s.for_header_cent}><img src={headerimg} alt="image" className={s.idea_img} />
           
           
            <header className={s.header_top} >
                
                    

<div className={s.text_a}>
<h1>FlexiMine</h1>
<h3>Mining, Staking, AI
</h3>
<p>Experience the best of both worlds - distributed cloud mining of all cryptocurrencies with the help of artificial intelligence.</p>
<div className={s.button_com}>
    <div className={s.button_com1}>
<button style={{width:'100%'}}><img src={img4} alt="" /> Whitepaper</button>
<button style={{width:'49%'}}><img src={img3} alt="" /> KYC</button>
<button style={{width:'49%'}}><img src={img2} alt="" /> Audit</button>
    </div>
<div className={s.text_com}>
Your individual mining power bonus will be calculated at the conclusion of the presale.
<img src={img1} alt="" />
</div>
</div>
<div className={s.header_video}>
   <div className={s.test_video} id="vid" onClick={()=>{document.querySelector('#vid').style="display:none"}} > <img src={img5}  style={{width:'70px',height:'70px'}} alt="" /></div>
<iframe width="100%" height="250" src="https://www.youtube.com/embed/CywVrdHIb4Y?si=SE-b7lx3zulf8RYm&amp;controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
<div className={s.credit_a}>
    <h2>$FXM Pre-Sale</h2>
    <div className={s.header_stats}>
        <div className={s.header_stat}>
            <h5>0</h5>
            <h6>DAY</h6>
        </div>
        <div className={s.header_stat}>
            <h5>0</h5>
            <h6>HRS</h6>
        </div>
        <div className={s.header_stat}>
            <h5>0</h5>
            <h6>MINS</h6>
        </div>
        <div className={s.header_stat}>
            <h5>0</h5>
            <h6>SEC</h6>
        </div>
    </div>
    <div className={s.opatext}>
    Phase 1 of 12
    </div>
    <div className={s.line1_a}>
        <div className={s.line2_a}></div>
    </div>
    <div className={s.opa_2a}>Until Price Increase</div>
    <div className={s.fantasiy}>
        <h1>USDT RAISED: </h1>
        <h3>$0 / $5 000 000</h3>
    </div>
    <div className={s.fantasiy}>
        <h1>Your purchased FXM:</h1>
        <h3>0</h3>
    </div>
    <div className={s.fantasiy}>
        <h1>Your Eternal Power Add-on: </h1>
        <h3>0</h3>
    </div>
    <div className={s.button_header}>1 FXM = $0,01</div>
    <div className={s.buttonn_hes}>
    <div className={s.buttonn_he}>
   <img src={img7} alt="" />  ETH
</div>
<div className={s.buttonn_he}>
<img src={img8} alt="" /> USDT
    </div>
    </div>
<div className={s.header_a2s}>
<div className={s.header_a2}>
<div className={s.header_titile_a}>
    <h3>Pay with ETH</h3> <h3>Max</h3>
</div>
<div className={s.header_bod_a}>
<p>0</p> <img src={img8} alt="" />
</div>
</div>
<div className={s.header_a2}>
<div className={s.header_titile_a}>
    <h3>Recieve FXM</h3> 
</div>
<div className={s.header_bod_a}>
    <div></div>
<input placeholder='0' type='number' /> <img style={{position:'relative',zIndex:12}} src={img6} alt="" />
</div>
</div>
</div>
<div className={s.last_button}>
Connect wallet
</div>
</div>
   
               
                 </header> </div>
            <div className="bottom_header">
                <div className="bottom_header_center">
                <div className="bottom_header_card">
                    <h2>What is FlexiMine</h2>
                    <p className='bottom_header_p1'>FlexiMine provides you with the tools to make your cryptocurrency assets work for you. Our platform offers both staking and mining capabilities in one place, allowing you to increase earnings and enhance your investments. Utilize the power of AI to automatically select the most profitable assets for mining or choose to mine a specific currency manually. Instant access to mining and staking, as well as the ability to withdraw earned funds at any time, makes FlexiMine the perfect choice for those seeking flexibility and efficiency.</p>
                    <p className='bottom_header_p2'>FlexiMine: Mastery of Mining and Staking at Your Command</p>
                </div>
                <div className="for_right_images"><img id='img11' className='bottom_header_img1' src={bottom_header_img1} alt="" />
                    <img className='hosting1' src={hosting1} alt="" />
                    <img className='bottom_header_img1' src={bottom_header_img} alt="" />
                </div>
                </div>
            </div>
            <div className="roadmap">
                <div className="road_map_cent">
                    
                <center><h1 className='roadmap_h1'>FlexiMine Roadmap</h1></center>
                <div className="roadmap_cards">
                    <div className="road_map_card1">
                        <h2>01</h2>
                    <div className="road_map_card">
                        <h3>Q4 2023</h3>
                        <div className="road_for_flex">
                            <div className="dot"></div>
                            <h5>Start active development of FlexiMine's mobile and desktop applications.</h5>
                        </div>
                        <div className="road_for_flex">
                            <div className="dot"></div>
                            <h5>Launch a comprehensive marketing campaign to increase brand awareness.</h5>
                        </div>
                        <div className="road_for_flex">
                            <div className="dot"></div>
                            <h5>Expand the team of developers and marketers to support the platform's growth.</h5>
                        </div>
                        <div className="road_for_flex">
                            <div className="dot"></div>
                            <h5>Strengthen and optimize the platform's infrastructure in anticipation of scaling services.</h5>
                        </div>
                    </div>
                    </div>
                    <div className="road_map_card1">
                        <h2>02</h2>
                    <div className="road_map_card">
                        <h3>Q1 2024</h3>
                        <p>Official release of FlexiMine's mobile and desktop applications.
Completion of the presale phase and opening of the platform for deposits and staking.
Enabling the feature for users to withdraw mined funds.
Implementation of marketing campaigns involving influencers and active promotion on social media.
Introduction of intelligent AI algorithms to enhance multi-mining.
Expansion of the customer support team to ensure a high level of service.
Listing of the FXM token on leading centralized cryptocurrency exchanges (CEX).</p>
                    </div>
                    </div>
                    <div className="road_map_card1">
                        <h2>03</h2>
                    <div className="road_map_card">
                        <h3>Q2 2024</h3>
                        <p>Intensification of marketing efforts focused on demonstrating successful mining and staking use cases.
Development of partnerships with major cloud mining providers.
Strategic partnership with key cryptocurrency exchanges to increase FXM token liquidity.
Launch of loyalty programs and referral systems to stimulate community growth.
</p>
                    </div>
                    </div>
                    <div className="road_map_card1">
                        <h2>04</h2>
                    <div className="road_map_card">
                        <h3>Q3 2024</h3>
                        <p>Optimization of staking functionality on the FlexiMine platform.
Conducting educational webinars and master classes for users.
Improvement of analytics tools for tracking mining and staking results.
Planning and preparation for the platform's expansion into new markets.
</p>
                    </div>
                    </div>
                    <div className="road_map_card1">
                        <h2>05</h2>
                    <div className="road_map_card">
                        <h3>Q4 2024
</h3>
                        <p>Implementation of new features and improvements in mobile and desktop applications.
Expansion of the platform's geographic presence in new markets.
Implementation of advanced measures for the protection of user assets.
Integration with additional blockchain platforms and DeFi projects.</p>
                    </div>
                    </div>
                    <div className="road_map_card1">
                        <h2>06</h2>
                    <div className="road_map_card">
                        <h3>Q1 2025
</h3>
                        Launch of new tools for staking a variety of cryptocurrencies.
Implementation of automatic reinvestment features for mining revenues.
Expansion of the network of strategic partnerships to strengthen the platform.
                    </div>
                    </div>
                </div>
            
                </div>
            </div>
            <div className="how_start">
                <h1>How to Start</h1>
                <h6>Your Path to Cryptocurrency Mining and Staking</h6>
                <div className="how_start_cards">
                    <div className="how_start_card">
                        <img src={rasm11} alt="" />
                        <p>With FlexiMine, starting mining and staking becomes easier than ever. Open the door to the world of crypto mining by making a deposit via MetaMask or Bitcoin, which directly translates into mining activity and staking opportunities.</p>
                    </div>
                    <div className="how_start_card">
                        <img src={rasm22} alt="" />
                        <p>Choose which cryptocurrency to mine on your own, or use our AI to maximize profits in stablecoins. </p>
                    </div>
                    <div className="how_start_card">
                        <img src={rasm33} alt="" />
                        <p>FlexiMine gives you unique flexibility in managing your investments, including the complete return of your deposit at your discretion, ensuring the stability of your income and protection of your investments even in volatile market conditions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
