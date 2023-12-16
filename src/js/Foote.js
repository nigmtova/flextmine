import React from 'react'
import Logo from '../img/Group 1000003960.png'
import '../css/Footer.css'

export default function Foote() {
  return (
    <div>
        <div className="for_footer">
            <div className="for_footer_cent">
            <div className="for_footer_card">
            <img src={Logo} alt="" />
            <p>Copyright 2023 FlexiMine. All Rights Reserved.</p>
            <p>Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
            </div>
            <div id='for_footer_card1' style={{textAlign:"right",width:"250px"}} className="for_footer_card">
                <p>PRIVACY POLICY</p>
                <div className="line_for_footer"></div>
                <p>COOKIES</p>
                <div className="line_for_footer"></div>
                <p>TERMS OF USE</p>
            </div>
            </div>
        </div>
    </div>
  )
}
