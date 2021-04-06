import axios from 'axios'
import React from 'react'
import "./card.css"
export default function Card({ userCard }) {

    const shortname = userCard.Name
    const aa = shortname.indexOf(" ")
    const shortName1 = (shortname.slice(0, 1) + shortname.slice(aa + 1, aa + 2))
    const shortName2 = (shortname.slice(0, 1))
    return (
        <div className='contact_card'>
            <div className="contact__header">
                <div className="contact__shortname">
                    <h1 style={{ textTransform: "uppercase" }}>{aa === -1 ? shortName2 : shortName1}</h1>
                </div>
                <div>
                    <h3 className="contact__name">{userCard.Name}</h3>
                    <h5 className="contact__post">{userCard.Designation}</h5>
                </div>
            </div>
            <div className="contact__body">
                <div className="contact__details" >
                    <h3>Full Name</h3>
                    <h1>{userCard.Name}</h1>
                </div>
                <div className="contact__details" >
                    <h3>Email</h3>
                    <h1>{userCard.Email}</h1>
                </div>
                <div className="contact__details" >
                    <h3>Phone</h3>
                    <h1>{userCard.Phone}</h1>
                </div>
                <div className="contact__details" >
                    <h3>Company</h3>
                    <h1>{userCard.Company}</h1>
                </div>
                <div className="contact__details" >
                    <h3>City</h3>
                    <h1>{userCard.City}</h1>
                </div>
            </div>
        </div>
    )
}
