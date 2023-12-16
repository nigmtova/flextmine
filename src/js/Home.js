import React, { useEffect, useRef } from 'react'
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
import rasm11 from "../img/image 2.png"
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
import { IoClose } from "react-icons/io5";
import img9 from "../img/ellips.png"
import img10 from "../img/whatsapp.png";
import img11 from "../img/image 67.png";
import img12 from "../img/image 67 (1).png";
import img13 from "../img/image 68.png";
import img14 from "../img/image 64.png";
import telegram1 from "../img/telegram.png";
import logos1 from "../img/logo1 2 (1).png"
import logos2 from "../img/logo7.png"
import logos3 from "../img/logo6.png"
import logos4 from "../img/logo5.png"
import logos5 from "../img/logo4.png"
import logos6 from "../img/logo2.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Pagination } from 'swiper/modules';

function rusper() {
    localStorage.setItem("lang", "rus")
    window.location.reload()
}
function engper() {
    localStorage.setItem("lang", "eng")
    window.location.reload()
}

export default function Home() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current.swiper;
    
        const interval = setInterval(() => {
          if (swiper) {
            if (swiper.activeIndex < swiper.slides.length - 1) {
              swiper.slideNext();
            } else {
              swiper.slideTo(0);
            }
          }
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    function ang_lang() {
        document.querySelectorAll(".for_lang_bottom")[0].style = "display:block"
        document.querySelectorAll(".for_none_lang")[0].style = "display:block"
        document.querySelectorAll(".lang_arrow")[0].style = "transform: rotate(180deg);"
        document.querySelectorAll(".for_lang_bottom")[1].style = "display:block"
        document.querySelectorAll(".for_none_lang")[1].style = "display:block"
        document.querySelectorAll(".lang_arrow")[1].style = "transform: rotate(180deg);"
    }
    function ang_lang_back() {
        document.querySelectorAll(".for_lang_bottom")[0].style = "display:none"
        document.querySelectorAll(".for_none_lang")[0].style = "display:none"
        document.querySelectorAll(".lang_arrow")[0].style = "transform: rotate(0deg);"
        document.querySelectorAll(".for_lang_bottom")[1].style = "display:none"
        document.querySelectorAll(".for_none_lang")[1].style = "display:none"
        document.querySelectorAll(".lang_arrow")[1].style = "transform: rotate(0deg);"
    }

    function menuicon() {
        document.querySelector(".nav_box2").style = "position: fixed; top:0; left:0; transition: 0.5s;"
    }

    function close2() {
        document.querySelector(".nav_box2").style = "position: absolute; left:-900px; transition: 1s;"
    }

    function accardion1() {
        document.querySelector(".content").classList.toggle("accardion2")
    }

    function accardion2() {
        document.querySelector(".content2").classList.toggle("accardion3")
    }

    function accardion3() {
        document.querySelector(".content3").classList.toggle("accardion4")
    }
    function accardion4() {
        document.querySelector(".content4").classList.toggle("accardion5")
    }


    function accardion5() {
        document.querySelector(".content5").classList.toggle("accardion6")
    }

    function accardion6() {
        document.querySelector(".content6").classList.toggle("accardion7")
    }

    useEffect(() => {
        if (localStorage.getItem("lang") === "eng") {
            document.querySelectorAll("#rus")[0].src = `${ang}`
            document.querySelectorAll("#rus")[1].src = `${ang}`
            document.querySelectorAll("#which_lang")[0].innerHTML = "Eng"
            document.querySelectorAll("#which_lang")[1].innerHTML = "Eng"
        } else {
            document.querySelectorAll("#rus")[0].src = `${rus}`
            document.querySelectorAll("#rus")[1].src = `${rus}`
            document.querySelectorAll("#which_lang")[0].innerHTML = "Rus"
            document.querySelectorAll("#which_lang")[1].innerHTML = "Rus"
        }
    }, [])


    return (
        <div style={{ background: "#16151C", overflow: "hidden" }}>
            {localStorage.getItem("lang") == "eng" ? (<div className="Home_main">
                <div className="navbar">
                    <div className="navbar_in">
                        <div className="nav_box2">
                            <div className="nav2_card">
                                <img className='logo1' src={Logo} alt="" />
                                <IoClose className='close2' onClick={() => close2()} />
                            </div>
                            {/* <img className='logo2' src={Logo2} alt="" /> */}
                            <ul className='navbar_ul2'>
                                <li onClick={() => {window.location = "#roadmap";document.querySelector(".nav_box2").style="left-900px"}}>Roadmap</li>
                                <li onClick={() => {window.location = "#tokenomix";document.querySelector(".nav_box2").style="left-900px"}}>Tokenomics</li>
                                <li onClick={() => {window.location = "#for_back_faq";document.querySelector(".nav_box2").style="left-900px"}}>FAQ</li>
                                <li onClick={() => {window.location = "#for_back_contact";document.querySelector(".nav_box2").style="left-900px"}}>Contact</li>
                                <li onClick={() => {window.location = "#roadmap";document.querySelector(".nav_box2").style="left-900px"}}>Whitepaper</li>
                                <div className="languages">
                                    <div onMouseEnter={() => ang_lang()} className="for_none_lang"></div>
                                    <div onMouseLeave={() => ang_lang_back()} className="for_lang_bottom">
                                        <div onClick={() => rusper()} id='for_eng_lan' className="for_eng_lan">
                                            <img className='rus' src={rus} alt="" />
                                            <h2 className='which_lang'>Rus</h2>
                                        </div>
                                        <div onClick={() => engper()} className="for_eng_lan">
                                            <img className='rus' src={ang} alt="" />
                                            <h2 className='which_lang'>Eng</h2>
                                        </div>
                                    </div>
                                    <div onMouseEnter={() => ang_lang()} onMouseLeave={() => ang_lang_back()} className="eng_lan">
                                        <img id='rus' className='rus' src={ang} alt="" />
                                        <h2 id='which_lang' className='which_lang'>Eng</h2>
                                        <IoIosArrowDown className='lang_arrow' />
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <IoMenuSharp className='navbar_manu' onClick={() => menuicon()} />
                        <img className='logo1' src={Logo} alt="" />
                        <img className='logo2' src={Logo2} alt="" />
                        <ul className='navbar_ul'>
                            <li onClick={() => window.location = "#roadmap"}>Roadmap</li>
                            <li onClick={() => window.location = "#tokenomix"}>Tokenomics</li>
                            <li onClick={() => window.location = "#for_back_faq"}>FAQ</li>
                            <li onClick={() => window.location = "#for_back_contact"}>Contact</li>
                            <li onClick={() => window.location = "#roadmap"}>Whitepaper</li>
                        </ul>
                        <div className="languages">
                            <div onMouseEnter={() => ang_lang()} className="for_none_lang"></div>
                            <div onMouseLeave={() => ang_lang_back()} className="for_lang_bottom">
                                <div onClick={() => rusper()} id='for_eng_lan' className="for_eng_lan">
                                    <img className='rus' src={rus} alt="" />
                                    <h2 className='which_lang'>Rus</h2>
                                </div>
                                <div onClick={() => engper()} className="for_eng_lan">
                                    <img className='rus' src={ang} alt="" />
                                    <h2 className='which_lang'>Eng</h2>
                                </div>
                            </div>
                            <div onMouseEnter={() => ang_lang()} onMouseLeave={() => ang_lang_back()} className="eng_lan">
                                <img id='rus' className='rus' src={ang} alt="" />
                                <h2 id='which_lang' className='which_lang'>Eng</h2>
                                <IoIosArrowDown className='lang_arrow' />
                            </div>
                        </div>
                        <button>Buy now</button>
                    </div>
                </div><div className={s.for_header_cent}><img src={headerimg} alt="image" className={s.idea_img} />
                    <header className={s.header_top} >



                        <div className={s.text_a}>
                            <h1>FlexiMine</h1>
                            <h3>Mining, Staking, AI
                            </h3>
                            <p>Experience the best of both worlds - distributed cloud mining of all cryptocurrencies with the help of artificial intelligence.</p>
                            <div className={s.button_com}>
                                <div className={s.button_com1}>
                                    <button style={{ width: '100%' }}><img src={img4} alt="" /> Whitepaper</button>
                                    <button style={{ width: '49%' }}><img src={img3} alt="" /> KYC</button>
                                    <button style={{ width: '49%' }}><img src={img2} alt="" /> Audit</button>
                                </div>
                                <div className={s.text_com}>
                                    Your individual mining power bonus will be calculated at the conclusion of the presale.
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className={s.header_video}>
                                <div className={s.test_video} id="vid" onClick={() => { document.querySelector('#vid').style = "display:none" }} > <img src={img5} style={{ width: '70px', height: '70px' }} alt="" /></div>
                                <iframe className={s.vide_classes} width="100%" height="250" src="https://www.youtube.com/embed/CywVrdHIb4Y?si=SE-b7lx3zulf8RYm&amp;controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                <h3 className={s.ustd_h3}>$0 / $5 000 000</h3>
                            </div>
                            <div className={s.fantasiy}>
                                <h1>Your purchased FXM:</h1>
                                <h3 className={s.ustd_h3}>0</h3>
                            </div>
                            <div className={s.fantasiy}>
                                <h1>Your Eternal Power Add-on: </h1>
                                <h3 className={s.ustd_h3}>0</h3>
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
                                        <h3 className={s.pay_classes}>Pay with ETH</h3> <h3 className={s.pay_classes}>Max</h3>
                                    </div>
                                    <div className={s.header_bod_a}>
                                        <p><input className='for_kripta' type="number" placeholder='0' /></p> <img src={img8} alt="" />
                                    </div>
                                </div>
                                <div className={s.header_a2}>
                                    <div className={s.header_titile_a}>
                                        <h3 className={s.pay_classes}>Recieve FXM</h3>
                                    </div>
                                    <div className={s.header_bod_a}>
                                        <p><input className='for_kripta' type="number" placeholder='0' /></p> <img src={img6} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.last_button}>
                                Connect wallet
                            </div>
                        </div>


                    </header>
                    <div className="for_logos">
                        <h3>FEATURED IN:</h3>
                        <Swiper
                            slidesPerView={1.5}
                            centeredSlides={true}
                            initialSlide={1}
                            spaceBetween={-50}
                            modules={[Pagination]}
                            ref={swiperRef}

                            className="mySwiper"
                        >
                            <SwiperSlide><img style={{ width: '170px' }} src={logos1} alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ width: '170px' }} src={logos2} alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ width: '170px' }} src={logos3} alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ width: '170px' }} src={logos4} alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ width: '170px' }} src={logos5} alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{ width: '170px' }} src={logos6} alt="" /></SwiperSlide>
                        </Swiper>

                        <div className="for_logos_images">
                            <img src={logos1} alt="" />
                            <img src={logos2} alt="" />
                            <img src={logos3} alt="" />
                            <img src={logos4} alt="" />
                            <img src={logos5} alt="" />
                            <img src={logos6} alt="" />
                        </div>
                    </div>
                </div>
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
                <div id='roadmap' className="roadmap">
                    <div className="road_map_cent">

                        <center><h1 className='roadmap_h1'>FlexiMine Roadmap</h1></center>
                        <div className="roadmap_cards">
                            <div className="road_map_card1">
                                <h2>01</h2>
                                <h4>01</h4>
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
                                <h4>02</h4>
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
                                <h4>03</h4>
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
                                <h4>04</h4>
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
                                <h4>05</h4>
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
                                <h4>06</h4>
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
                <div id='tokenomix' className="tokenomix">
                    <div className="main2_div">
                        <div className="Sub_div">
                            <div className="p_mini">
                                <h1>Tokenomics</h1>
                                <p>
                                    FlexiMine's tokenomics are designed to ensure long-term
                                    sustainability and investment appeal while simultaneously
                                    fostering active participation and community support. The token
                                    distribution is as follows:
                                </p>
                            </div>
                        </div>
                        <div className="cards_div">
                            <div className="more_div2">
                                <img src={img9} alt="" />
                            </div>
                            <div className="texts_div">
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            35% (1,400,000,000 tokens) Mining Investments:
                                        </span>{" "}
                                        These funds will be utilized to expand and upgrade FlexiMine's
                                        mining capacities, including acquiring new equipment and
                                        improving infrastructure.
                                    </p>
                                </div>
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" style={{ background: "#FF04FA" }} />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            25% (1,000,000,000 tokens) Platform Development:
                                        </span>
                                        This portion of tokens is allocated for innovation and
                                        technological advancement, ensuring the continuous enhancement
                                        of the FlexiMine platform and strengthening its market
                                        presence.
                                    </p>
                                </div>
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            35% (1,400,000,000 tokens) Mining Investments:
                                        </span>{" "}
                                        These funds will be utilized to expand and upgrade FlexiMine's
                                        mining capacities, including acquiring new equipment and
                                        improving infrastructure.
                                    </p>
                                </div>
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            35% (1,400,000,000 tokens) Mining Investments:
                                        </span>{" "}
                                        These funds will be utilized to expand and upgrade FlexiMine's
                                        mining capacities, including acquiring new equipment and
                                        improving infrastructure.
                                    </p>
                                </div>
                            </div>
                            <div className="more_div">
                                <img src={img9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="contact_map"
                    style={{
                        background: "linear-gradient(to right, #1d1430, 25%, #16151c 80%)",
                    }}
                >
                    <div className="main2_div">
                        <div className="contact_center">
                            <h1>Team & Advisors</h1>
                            <p>
                                See for yourself that FlexiMine is People-centered and
                                Trustworthy. Understand how our system works. Transparent and
                                Safe. it's about the people in front and their experience and
                                knowledge
                            </p>
                        </div>
                        <div className="roadmap_cards">
                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img14} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash"><h3>Светлана С.</h3>
                                        <p>Руководитель блокчейна</p>
                                    </div>
                                    <div className="gh">
                                        <div className="Hash_tag">
                                            <img src={telegram1} alt="" />
                                            <img src={img10} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img11} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Артур К.</h3>
                                        <p>Директор</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={img10} alt="" />
                                        <img src={telegram1} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img12} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Екатерина С.</h3>
                                        <p>Технический аналитик</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img13} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Филипп Т.</h3>
                                        <p>Руководитель отдела развития и партнерства</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img14} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Светлана С.</h3>
                                        <p>Руководитель блокчейна</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img11} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Артур К.</h3>
                                        <p>Директор</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img12} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Екатерина С.</h3>
                                        <p>Технический аналитик</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div><div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img13} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Филипп Т.</h3>
                                        <p>Руководитель отдела развития и партнерства</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id='for_back_faq' className="for_back_faq">
                    <section className='faq' id='Faq'>
                        <div className="faq_h1">
                            <h1>Frequently Asked Questions</h1>
                        </div>

                        <div className="accordion">
                            <div className="faq_blue"></div>
                            <div className="faq_pink"></div>
                            <div className="faq_purple"></div>
                            <div onClick={() => accardion1()} className="contentBx">
                                <div className="label"><p>What is FlexiMine?</p></div>
                                <div className="content">
                                    <p>FlexiMine is an innovative platform for cryptocurrency mining and staking, combining the advantages of cloud mining with artificial intelligence. Users can choose cryptocurrencies for mining, such as Bitcoin or Dogecoin, and participate in staking. It is also possible to use AI for automatically selecting the most profitable options for mining and staking.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion2()} className="contentBx">
                                <div className="label"><p>How can I buy FXM tokens?</p></div>
                                <div className="content2">
                                    <p>FXM tokens are available for purchase on our official website fleximine.com using cryptocurrencies such as USDT or Ethereum.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion3()} className="contentBx">
                                <div className="label"><p>What makes FlexiMine unique?</p></div>
                                <div className="content3">
                                    <p>FlexiMine offers a unique mining opportunity by using any cryptocurrency as mining power under collateral. This innovation is a first in the crypto industry.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion4()} className="contentBx">
                                <div className="label"><p>How does staking work in FlexiMine?</p></div>
                                <div className="content4">
                                    <p>In FlexiMine, users can stake any cryptocurrency that supports staking, within a unified ecosystem.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion5()} className="contentBx">
                                <div className="label"><p>What are the benefits for FXM presale participants?</p></div>
                                <div className="content5">
                                    <p>Participants in the presale will receive a lifetime bonus in mining power, which will be individually calculated after the end of the presale.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion6()} className="contentBx">
                                <div className="label"><p>How does FlexiMine ensure security and transparency?</p></div>
                                <div className="content6">
                                    <p>FlexiMine utilizes state-of-the-art security technologies and provides users with full control over their investments and mining activities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="faq_right_img">
                            <div className="faq_dark_purple"></div>
                            <img src={faq} alt="" />
                        </div>
                    </section></div>
                <div id='for_back_contact' className="for_back_contact">
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
                                    {/* <div className="cont_links2">
                            <p>Telegram</p>
                            <p>Whatsapp</p>
                            <p>Viber</p>
                        </div> */}
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

                <div className="for_footer">
                    <div className="for_footer_cent">
                        <div className="for_footer_card">
                            <img src={Logo} alt="" />
                            <p>Copyright 2023 FlexiMine. All Rights Reserved.</p>
                            <p>Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                        </div>
                        <div id='for_footer_card1' style={{ textAlign: "right", width: "250px" }} className="for_footer_card">
                            <p>PRIVACY POLICY</p>
                            <div className="line_for_footer"></div>
                            <p>COOKIES</p>
                            <div className="line_for_footer"></div>
                            <p>TERMS OF USE</p>
                        </div>
                    </div>
                </div>
            </div>) : (<div id='For_rus' className="Home_main">
                <div className="navbar">
                    <div className="navbar_in">
                        <div className="nav_box2">
                            <div className="nav2_card">
                                <img className='logo1' src={Logo} alt="" />
                                <IoClose className='close2' onClick={() => close2()} />
                            </div>
                            {/* <img className='logo2' src={Logo2} alt="" /> */}
                            <ul className='navbar_ul2'>
                                <li onClick={() => {window.location = "#roadmap";document.querySelector(".nav_box2").style="left-900px"}}>Дорожная карта</li>
                                <li onClick={() => {window.location ="#tokenomix";document.querySelector(".nav_box2").style="left-900px"}}>Токеномика</li>
                                <li onClick={()=> {window.location= "#for_back_faq";document.querySelector(".nav_box2").style="left-900px"}}>Вопросы</li>
                                <li onClick={()=> {window.location= "#for_back_contact";document.querySelector(".nav_box2").style="left-900px"}}>Контакты</li>
                                <li onClick={()=> {window.location= "#for_back_faq";document.querySelector(".nav_box2").style="left-900px"}}>Белая бумага</li>
                                <div className="languages">
                                    <div onMouseEnter={() => ang_lang()} className="for_none_lang"></div>
                                    <div onMouseLeave={() => ang_lang_back()} className="for_lang_bottom">
                                        <div onClick={() => rusper()} id='for_eng_lan' className="for_eng_lan">
                                            <img className='rus' src={rus} alt="" />
                                            <h2 className='which_lang'>Rus</h2>
                                        </div>
                                        <div onClick={() => engper()} className="for_eng_lan">
                                            <img className='rus' src={ang} alt="" />
                                            <h2 className='which_lang'>Eng</h2>
                                        </div>
                                    </div>
                                    <div onMouseEnter={() => ang_lang()} onMouseLeave={() => ang_lang_back()} className="eng_lan">
                                        <img id='rus' className='rus' src={ang} alt="" />
                                        <h2 id='which_lang' className='which_lang'>Eng</h2>
                                        <IoIosArrowDown className='lang_arrow' />
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <IoMenuSharp className='navbar_manu' onClick={() => menuicon()} />
                        <img className='logo1' src={Logo} alt="" />
                        <img className='logo2' src={Logo2} alt="" />
                        <ul className='navbar_ul'>
                            <li onClick={() => window.location = "#roadmap"}>Дорожная карта</li>
                            <li onClick={() => window.location ="#tokenomix"}>Токеномика</li>
                            <li onClick={()=> window.location= "#for_back_faq"}>Вопросы</li>
                            <li onClick={()=> window.location= "#for_back_contact"}>Контакты</li>
                            <li onClick={()=> window.location= "#for_back_faq"}>Белая бумага</li>
                        </ul>
                        <div className="languages">
                            <div onMouseEnter={() => ang_lang()} className="for_none_lang"></div>
                            <div onMouseLeave={() => ang_lang_back()} className="for_lang_bottom">
                                <div onClick={() => rusper()} id='for_eng_lan' className="for_eng_lan">
                                    <img className='rus' src={rus} alt="" />
                                    <h2 className='which_lang'>Rus</h2>
                                </div>
                                <div onClick={() => engper()} className="for_eng_lan">
                                    <img className='rus' src={ang} alt="" />
                                    <h2 className='which_lang'>Eng</h2>
                                </div>
                            </div>
                            <div onMouseEnter={() => ang_lang()} onMouseLeave={() => ang_lang_back()} className="eng_lan">
                                <img id='rus' className='rus' src={ang} alt="" />
                                <h2 id='which_lang' className='which_lang'>Eng</h2>
                                <IoIosArrowDown className='lang_arrow' />
                            </div>
                        </div>
                        <button>Купить сейчас</button>
                    </div>
                </div><div className={s.for_header_cent}><img src={headerimg} alt="image" className={s.idea_img} />
                    <header className={s.header_top} >



                        <div className={s.text_a}>
                            <h1>FlexiMine</h1>
                            <h3>Mining, Staking, AI
                            </h3>
                            <p>Получите лучшее из двух миров - распределенный облачный майнинг всех криптовалют с помощью исскуственного интелекта</p>
                            <div className={s.button_com}>
                                <div className={s.button_com1}>
                                    <button style={{ width: '100%' }}><img src={img4} alt="" /> Белая бумага</button>
                                    <button style={{ width: '49%' }}><img src={img3} alt="" /> KYC</button>
                                    <button style={{ width: '49%' }}><img src={img2} alt="" /> Аудит</button>
                                </div>
                                <div className={s.text_com}>
                                    Ваш индивидуальный бонус к мощности майнинга будет рассчитан по завершении предварительной продажи.
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className={s.header_video}>
                                <div className={s.test_video} id="vid" onClick={() => { document.querySelector('#vid').style = "display:none" }} > <img src={img5} style={{ width: '70px', height: '70px' }} alt="" /></div>
                                <iframe className={s.vide_classes} width="100%" height="250" src="https://www.youtube.com/embed/CywVrdHIb4Y?si=SE-b7lx3zulf8RYm&amp;controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className={s.credit_a}>
                            <h2>$FXM Pre-Sale</h2>
                            <div className={s.header_stats}>
                                <div className={s.header_stat}>
                                    <h5>0</h5>
                                    <h6>день</h6>
                                </div>
                                <div className={s.header_stat}>
                                    <h5>0</h5>
                                    <h6>час</h6>
                                </div>
                                <div className={s.header_stat}>
                                    <h5>0</h5>
                                    <h6>минуты</h6>
                                </div>
                                <div className={s.header_stat}>
                                    <h5>0</h5>
                                    <h6>сек</h6>
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
                                <h1>СОБРАНО USDT:  </h1>
                                <h3 className={s.ustd_h3}>$0 / $5 000 000</h3>
                            </div>
                            <div className={s.fantasiy}>
                                <h1>ПРИОБРЕТЕННЫЙ ВАМИ FXM: </h1>
                                <h3 className={s.ustd_h3}>0</h3>
                            </div>
                            <div className={s.fantasiy}>
                                <h1>Ваш вечный бонус к мощности:  </h1>
                                <h3 className={s.ustd_h3}>0</h3>
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
                                        <h3 className={s.pay_classes}>Купите за ЭТХ</h3> <h3 className={s.pay_classes}>Max</h3>
                                    </div>
                                    <div className={s.header_bod_a}>
                                        <p>0</p> <img src={img8} alt="" />
                                    </div>
                                </div>
                                <div className={s.header_a2}>
                                    <div className={s.header_titile_a}>
                                        <h3 className={s.pay_classes}>Получите FXM</h3>
                                    </div>
                                    <div className={s.header_bod_a}>
                                        <p>0</p> <img src={img6} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.last_button}>
                                подключить кошелек
                            </div>
                        </div>


                    </header>
                    <div className="for_logos">
                        <h3>FEATURED IN:</h3>
                        <Swiper
                            slidesPerView={1.5}
                            centeredSlides={true}
                            initialSlide={1}
                            spaceBetween={-50}
                            modules={[Pagination]}
                            ref={swiperRef}
                            className="mySwiper"
                        >
                            <div className="for_swip_left"></div>
                            <SwiperSlide style={{ width: "170px !important" }}><img style={{ width: "170px !important" }} src={logos1} alt="" /></SwiperSlide>
                            <SwiperSlide style={{ width: "170px !important" }}><img style={{ width: "170px !important" }} src={logos2} alt="" /></SwiperSlide>
                            <SwiperSlide style={{ width: "170px !important" }}><img style={{ width: "170px !important" }} src={logos3} alt="" /></SwiperSlide>
                            <SwiperSlide style={{ width: "170px !important" }}><img style={{ width: "170px !important" }} src={logos4} alt="" /></SwiperSlide>
                            <SwiperSlide style={{ width: "170px !important" }}><img style={{ width: "170px !important" }} src={logos5} alt="" /></SwiperSlide>
                            <SwiperSlide style={{ width: "170px !important" }}><img style={{ width: "170px !important" }} src={logos6} alt="" /></SwiperSlide>
                            <div className="for_swip_right"></div>
                        </Swiper>
                        <div className="for_logos_images">
                            <img src={logos1} alt="" />
                            <img src={logos2} alt="" />
                            <img src={logos3} alt="" />
                            <img src={logos4} alt="" />
                            <img src={logos5} alt="" />
                            <img src={logos6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom_header">
                    <div className="bottom_header_center">
                        <div className="bottom_header_card">
                            <h2>Что такое Флексимайн</h2>
                            <p className='bottom_header_p1'>Флекчимайн предоставляет вам инструменты для того, чтобы ваши криптовалютные активы работали на вас. Наша платформа дает возможность стейкинга и майнинга в одном месте, предоставляя вам возможность увеличить доходы и усилить ваши инвестиции. Используйте мощь ИИ для автоматического выбора наиболее прибыльных активов для майнинга или выберите майнинг определенной валюты вручную. Мгновенный доступ к майнингу и стейкингу, а также возможность вывода заработанных средств в любой момент делает FlexiMine идеальным выбором для тех, кто ищет гибкость и эффективность."</p>
                            <p className='bottom_header_p2'>Флексимайн: Совершенство Майнинга и Стейкинга под Вашим Командованием
                            </p>
                        </div>
                        <div className="for_right_images"><img id='img11' className='bottom_header_img1' src={bottom_header_img1} alt="" />
                            <img className='hosting1' src={hosting1} alt="" />
                            <img className='bottom_header_img1' src={bottom_header_img} alt="" />
                        </div>
                    </div>
                </div>
                <div id='roadmap' className="roadmap">
                    <div className="road_map_cent">

                        <center><h1 className='roadmap_h1'>Дорожная карта</h1></center>
                        <div className="roadmap_cards">
                            <div className="road_map_card1">
                                <h2>01</h2>
                                <h4>01</h4>
                                <div className="road_map_card">
                                    <h3>Q4 2023</h3>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Начало активной разработки мобильного и десктопного приложений Флексимайн.</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Запуск обширной маркетинговой кампании для повышения узнаваемости бренда</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Расширение команды разработчиков и маркетологов для поддержки роста платформы</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Укрепление и оптимизация инфраструктуры платформы в преддверии масштабирования услуг</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1">
                                <h2>02</h2>
                                <h4>02</h4>
                                <div className="road_map_card">
                                    <h3>Q1 2024</h3>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Официальный релиз мобильного и десктопного приложений Флексимайн</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Завершение этапа предпродажи (presale) и открытие платформы для депозитов и стейкинга
</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Включение функции вывода намайненных средств для пользователей</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Реализация маркетинговых кампаний с участием инфлюенсеров и активное продвижение в социальных сетях.
</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Внедрение интеллектуальных алгоритмов AI для усовершенствования мультимайнинга
</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Расширение команды поддержки клиентов для обеспечения высокого уровня сервиса
</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Листинг токена FXM на ведущих централизованных биржах криптовалют (CEX)
</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1">
                                <h2>03</h2>
                                <h4>03</h4>
                                <div className="road_map_card">
                                    <h3>Q4 2023</h3>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Усиление маркетинговых усилий, направленных на демонстрацию успешных случаев использования майнинга и стейкинга.</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Развитие партнерских отношений с крупными провайдерами облачного майнинга.
</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Стратегическое партнерство с ключевыми криптовалютными биржами для повышения ликвидности токена FXM</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Запуск программ лояльности и реферальных систем для стимулирования роста сообщества</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1">
                                <h2>04</h2>
                                <h4>04</h4>
                                <div className="road_map_card">
                                    <h3>Q4 2023</h3>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Оптимизация функционала стейкинга на платформе Флексимайн</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Проведение образовательных вебинаров и мастер-классов для пользователей</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Улучшение инструментов аналитики для отслеживания результатов майнинга и стейкинга</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Планирование и подготовка к экспансии платформы на новые рынки</h5>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1">
                                <h2>05</h2>
                                <h4>05</h4>
                                <div className="road_map_card">
                                    <h3>Q4 2023</h3>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Внедрение новых функций и улучшений в мобильном и десктопном приложениях</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Расширение географического присутствия платформы на новых рынках</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Реализация продвинутых мер по защите активов пользователей</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Интеграция с дополнительными блокчейн-платформами и DeFi проектами</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1">
                                <h2>06</h2>
                                <h4>06</h4>
                                <div className="road_map_card">
                                    <h3>Q4 2023</h3>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Запуск новых инструментов для стейкинга разнообразных криптовалют</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Реализация функций автоматического реинвестирования доходов от майнинга</h5>
                                    </div>
                                    <div className="road_for_flex">
                                        <div className="dot"></div>
                                        <h5>Расширение сети стратегических партнерств для укрепления</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="how_start">
                    <h1>Как начать</h1>
                    <h6>Ваш Путь к Майнингу и Стейкингу Криптовалют</h6>
                    <div className="how_start_cards">
                        <div className="how_start_card">
                            <img src={rasm11} alt="" />
                            <p>С Флексимайн начать майнинг и стейкинг становится проще, чем когда-либо. Откройте дверь в мир криптомайнинга, внеся депозит через MetaMask или Bitcoin, который непосредственно преобразуется в майнинговую активность и возможности стейкинга.</p>
                        </div>
                        <div className="how_start_card">
                            <img src={rasm22} alt="" />
                            <p>Выбирайте, какую криптовалюту майнить самостоятельно, или воспользуйтесь нашим AI для максимизации прибыли в стейблкоинах. </p>
                        </div>
                        <div className="how_start_card">
                            <img src={rasm33} alt="" />
                            <p>Флексимайн дает вам уникальную гибкость для управления инвестициями, включая полный возврат депозита по вашему желанию, обеспечивая стабильность вашего дохода и защиту вложений даже в условиях волатильности рынка.</p>
                        </div>
                    </div>
                </div>
                <div id='tokenomix' className="tokenomix">
                    <div className="main2_div">
                        <div className="Sub_div">
                            <div className="p_mini">
                                <h1>Токеномика</h1>
                                <p>
                                    Флексимайн спроектирована так, чтобы обеспечить долгосрочную устойчивость и инвестиционную привлекательность, одновременно поощряя активное участие и поддержку со стороны сообщества. Ниже представлено распределение токенов:

                                </p>
                            </div>
                        </div>
                        <div className="cards_div">
                            <div className="more_div2">
                                <img src={img9} alt="" />
                            </div>
                            <div className="texts_div">
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            35% (1,400,000,000 токенов) Инвестиции в майнинг:
                                        </span>{" "}
                                        Эти средства будут использоваться для расширения и обновления майнинговых мощностей FlexiMine, что включает приобретение нового оборудования и улучшение инфраструктуры.

                                    </p>
                                </div>
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" style={{ background: "#FF04FA" }} />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            25% (1,000,000,000 токенов) Развитие платформы:
                                        </span>
                                        Эта часть токенов предназначена для инноваций и технологического развития, обеспечивая непрерывное улучшение платформы FlexiMine и укрепление ее позиций на рынке.

                                    </p>
                                </div>
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            20% (800,000,000 токенов) Маркетинг и партнерства:
                                        </span>{" "}
                                        Запланированы средства на маркетинговые кампании и стратегические партнерства, которые помогут расширить охват FlexiMine и привлечь новых пользователей.
                                    </p>
                                </div>
                                <div className="mini_hs">
                                    <div className="h_div">
                                        <div className="mini_cb" />
                                    </div>
                                    <p>
                                        <span style={{ fontWeight: "400" }}>
                                            10% (400,000,000 токенов) Привлечение сообщества:
                                        </span>{" "}
                                        Токены, выделенные для сообщества, предназначены для поощрения его активности, а также для вознаграждения пользователей за участие в различных инициативах и событиях, проводимых FlexiMine.


                                    </p>
                                </div>
                            </div>
                            <div className="more_div">
                                <img src={img9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="contact_map"
                    style={{
                        background: "linear-gradient(to right, #1d1430, 25%, #16151c 80%)",
                    }}
                >
                    <div className="main2_div">
                        <div className="contact_center">
                            <h1>Команда и консультанты</h1>
                            <p>
                                Убедитесь сами, что компания Флексимайн ориентирована на людей и заслуживает доверия. Разберитесь, как работает наша система. Прозрачный и безопасный.
                                речь идет о людях впереди, их опыте и знаниях
                            </p>
                        </div>
                        <div className="roadmap_cards">
                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img14} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash"><h3>Светлана С.</h3>
                                        <p>Руководитель блокчейна</p>
                                    </div>
                                    <div className="gh">
                                        <div className="Hash_tag">
                                            <img src={telegram1} alt="" />
                                            <img src={img10} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img11} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Артур К.</h3>
                                        <p>Директор</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={img10} alt="" />
                                        <img src={telegram1} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img12} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Екатерина С.</h3>
                                        <p>Технический аналитик</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img13} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Филипп Т.</h3>
                                        <p>Руководитель отдела развития и партнерства</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img14} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Светлана С.</h3>
                                        <p>Руководитель блокчейна</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img11} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Артур К.</h3>
                                        <p>Директор</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img12} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Екатерина С.</h3>
                                        <p>Технический аналитик</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div><div className="road_map_card1" style={{ paddingLeft: 10 }}>
                                <div className="image_contact">
                                    <img src={img13} alt="" />
                                </div>
                                <div className="Contacts_div">
                                    <div className="hash">
                                        <h3>Филипп Т.</h3>
                                        <p>Руководитель отдела развития и партнерства</p>
                                    </div>
                                    <div className="Hash_tag">
                                        <img src={telegram1} alt="" />
                                        <img src={img10} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id='for_back_faq' className="for_back_faq">
                    <section className='faq' id='Faq'>
                        <div className="faq_h1">
                            <h1>Часто задаваемые вопросы</h1>
                        </div>

                        <div className="accordion">
                            <div className="faq_blue"></div>
                            <div className="faq_pink"></div>
                            <div className="faq_purple"></div>
                            <div onClick={() => accardion1()} className="contentBx">
                                <div className="label"><p>Что такое FlexiMine?</p></div>
                                <div className="content">
                                    <p>FlexiMine is an innovative platform for cryptocurrency mining and staking, combining the advantages of cloud mining with artificial intelligence. Users can choose cryptocurrencies for mining, such as Bitcoin or Dogecoin, and participate in staking. It is also possible to use AI for automatically selecting the most profitable options for mining and staking.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion2()} className="contentBx">
                                <div className="label"><p>Как мне купить токен FXM?</p></div>
                                <div className="content2">
                                    <p>FXM tokens are available for purchase on our official website fleximine.com using cryptocurrencies such as USDT or Ethereum.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion3()} className="contentBx">
                                <div className="label"><p>В чем уникальность FlexiMine?</p></div>
                                <div className="content3">
                                    <p>FlexiMine offers a unique mining opportunity by using any cryptocurrency as mining power under collateral. This innovation is a first in the crypto industry.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion4()} className="contentBx">
                                <div className="label"><p>Как работает стейкинг в FlexiMine?</p></div>
                                <div className="content4">
                                    <p>In FlexiMine, users can stake any cryptocurrency that supports staking, within a unified ecosystem.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion5()} className="contentBx">
                                <div className="label"><p>Какие преимущества у участников предварительной продажи FXM?</p></div>
                                <div className="content5">
                                    <p>Participants in the presale will receive a lifetime bonus in mining power, which will be individually calculated after the end of the presale.</p>
                                </div>
                            </div>

                            <div onClick={() => accardion6()} className="contentBx">
                                <div className="label"><p>Как FlexiMine обеспечивает безопасность и прозрачность?</p></div>
                                <div className="content6">
                                    <p>FlexiMine utilizes state-of-the-art security technologies and provides users with full control over their investments and mining activities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="faq_right_img">
                            <div className="faq_dark_purple"></div>
                            <img src={faq} alt="" />
                        </div>
                    </section></div>
                <div id='for_back_contact' className="for_back_contact">
                    <section className="contact" id='cont'>
                        <div className="cont_h1">
                            <h1>Наши контакты</h1>
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
                                    {/* <div className="cont_links2">
                            <p>Telegram</p>
                            <p>Whatsapp</p>
                            <p>Viber</p>
                        </div> */}
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

                <div className="for_footer">
                    <div className="for_footer_cent">
                        <div className="for_footer_card">
                            <img src={Logo} alt="" />
                            <p>Copyright 2023 FlexiMine. Все права защищены.</p>
                            <p>Дисклеймер: криптовалюта может быть нерегулируемой в вашей юрисдикции. Стоимость криптовалют может как падать, так и расти. Прибыль может облагаться налогом на прирост капитала или другими налогами, действующими в вашей юрисдикции.</p>
                        </div>
                        <div id='for_footer_card1' style={{ textAlign: "right", width: "250px" }} className="for_footer_card">
                        <p>ПОЛИТИКА КОНФЕДЕНЦИАЛЬНОСТИ</p>
                            <p>ФАЙЛФ COOKIES</p>
                            <p>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
