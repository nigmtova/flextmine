import React from "react";
import s from "./Header.module.css"
import headerimg from "./image/image.png"
import img1 from "./image/Arrow 1.png"
import img2 from "./image/Group 1000003496.png"
import img3 from "./image/fluent_scan-person-24-regular.png"
import img4 from "./image/raphael_paper.png"
import img5 from "./image/Group 1000003496.png"
import img6 from "./image/FXM.png"
import img7 from "./image/Icon.png"
import img8 from "./image/Icon (1).png"



export default function Header() {
  return <div>
    <header className={s.header_top} >
<img src={headerimg} alt="image" className={s.idea_img} />
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
<p>0</p> <img src={img6} alt="" />
</div>
</div>
</div>
<div className={s.last_button}>
Connect wallet
</div>
</div>
    </header>


  </div>;
}
