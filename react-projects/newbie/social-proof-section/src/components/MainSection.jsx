import React from 'react'
import "./MainSection.css"
import { userData , rating } from '../Data/Data'
const MainSection = () => {
    console.log(userData[0])
    return (
        <main>
            <section className='section-one'>
                <div className='section-one-content'>
                    <h1>    10,000+ of our users love our products.</h1>
                    <p>
                        We only provide great products combined with excellent customer service.
                        See what our satisfied customers are saying about our services.
                    </p>
                </div>
                <div>
                    {rating.map((rat,idx)=>
                    <div key={idx} className='rating-box'>
                        <div className="star-images">
                            <img src={rat.starImg} alt="starIcon" />
                            <img src={rat.starImg} alt="starIcon" />
                            <img src={rat.starImg} alt="starIcon" />
                            <img src={rat.starImg} alt="starIcon" />
                            <img src={rat.starImg} alt="starIcon" />
                        </div>
                        <p>{rat.ratingContent}</p>

                    </div>
                    )}
                </div>
            </section>
            <section className='section-two'>
                {userData.map((el, idx) =>
                    <div className="card" key={idx}>
                        <div className="img-box">
                            <img src={el.userImg} alt="userImg" />
                            <div className="name-box">
                                <h5>{el.userName}</h5>
                                <p>Verified Buyer</p>
                            </div>
                        </div>
                        <p>
                            {el.content}
                        </p>
                    </div>
                )}
            </section>
        </main>
    )
}

export default MainSection
