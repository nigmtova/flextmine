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
import faq from '../img/hodlbot.png'
import vk from '../img/vk.svg'
import insta from '../img/insta.png'
import mail from '../img/mail.png'
import phone from '../img/phone.png'
import youtube from '../img/youtube.png'
import telegram from '../img/telegram.svg'
import Whatsapp from '../img/whatsap.png'
import map from '../img/map.svg'
import karta from '../img/karta.png'



export default function Home() {
    // function accord() {

    // }
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
    <div style={{background:"#17161E", overflow:"hidden"}}>
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
    <div></div>
<input placeholder='0' type='number' /> <img src={img8} alt="" style={{position:'relative',zIndex:12,cursor:'pointer'}}  />
</div>
</div>
<div className={s.header_a2}>
<div className={s.header_titile_a}>
    <h3>Recieve FXM</h3> 
</div>
<div className={s.header_bod_a}>
    <div></div>
<input placeholder='0' type='number' /> <img style={{position:'relative',zIndex:12,cursor:'pointer'}} src={img6} alt="" />
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

          <section className='faq' id='Faq'>
            <div className="faq_h1">
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="accordion">
                <div className="faq_blue"></div>
                <div className="faq_pink"></div>
                <div className="faq_purple"></div>
                <div className="contentBx">
                    <div className="label">What is FlexiMine?</div>
                    <div className="content">
                        <p>FlexiMine is an innovative platform for cryptocurrency mining and staking, combining the advantages of cloud mining with artificial intelligence. Users can choose cryptocurrencies for mining, such as Bitcoin or Dogecoin, and participate in staking. It is also possible to use AI for automatically selecting the most profitable options for mining and staking.</p>
                    </div>
                </div>

                <div className="contentBx">
                    <div className="label">How can I buy FXM tokens?</div>
                    <div className="content2">
                        <p>FXM tokens are available for purchase on our official website fleximine.com using cryptocurrencies such as USDT or Ethereum.</p>
                    </div>
                </div>

                <div className="contentBx">
                    <div className="label">What makes FlexiMine unique?</div>
                    <div className="content3">
                        <p>FlexiMine offers a unique mining opportunity by using any cryptocurrency as mining power under collateral. This innovation is a first in the crypto industry.</p>
                    </div>
                </div>

                <div className="contentBx">
                    <div className="label">How does staking work in FlexiMine?</div>
                    <div className="content4">
                        <p>In FlexiMine, users can stake any cryptocurrency that supports staking, within a unified ecosystem.</p>
                    </div>
                </div>

                <div className="contentBx">
                    <div className="label">What are the benefits for FXM presale participants?</div>
                    <div className="content5">
                        <p>Participants in the presale will receive a lifetime bonus in mining power, which will be individually calculated after the end of the presale.</p>
                    </div>
                </div>

                <div className="contentBx">
                    <div className="label">How does FlexiMine ensure security and transparency?</div>
                    <div className="content6">
                        <p>FlexiMine utilizes state-of-the-art security technologies and provides users with full control over their investments and mining activities.</p>
                    </div>
                </div>
            </div>
            <div className="faq_right_img">
                <div className="faq_dark_purple"></div>
                <img src={faq} alt="" />
            </div>
          </section>

          <section className="contact" id='cont'>
            <div className="cont_h1">
                <h1>Our contacts</h1>
            </div>
            <div className="cont_box">
                <div className="cont_left">
                    <div className="cont_blue"></div>
                    <div className="cont_pink"></div>
                    <div className="cont_left_min">
                        <div className="cont_links">
                            <div className="cont_links_p"><img src={phone} alt="" /><p>+7 937 352-27-75</p></div>
                            <div className="cont_links_p"><img src={mail} alt="" /><p>FlexiMine@gmail.com</p></div>
                            <div className="cont_links_p"><img src={map} alt="" /><p>г. Москва, м.Красносельская, ул. Гаврикова 2\38</p></div>
                        </div>

                        <div className="cont_links2">
                            <p>Telegram</p>
                            <p>Whatsapp</p>
                            <p>Viber</p>
                        </div>
                    </div>
                    <div className="cont_links3">
                        <p>Наши соц сети:</p>
                        <img src={vk} alt="" />
                        <img src={insta} alt="" />
                        <img src={telegram} alt="" />
                        <img src={Whatsapp} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>

                <div className="cont_right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7392188735275!2d37.665886481691636!3d55.78040093041076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5358176aa7301%3A0x2c849191559e3ae!2z0YPQuy4g0JPQsNCy0YDQuNC60L7QstCwLCAyLzM4LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTA3MTQw!5e0!3m2!1sru!2s!4v1702707635920!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </section>
        </div>
    </div>
  )
}
