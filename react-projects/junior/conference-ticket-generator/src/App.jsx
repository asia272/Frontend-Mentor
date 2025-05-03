import { useState } from "react"
import Form from "./components/Form"
import Ticket from "./components/Ticket"
import lineBottomDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg"
import lineBottomMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
import lineTop from "./assets/images/pattern-squiggly-line-top.svg"
import circle from "./assets/images/pattern-circle.svg"
import logo from "./assets/images/logo-full.svg"

function App() {
  const [userData, setUserData] = useState(null)
  console.log(userData)

  return (
    <>
      <img className="squigglyTop" src={lineTop} alt="squigglyTop" />
      <picture>
        <source media="(min-width: 900px)" srcSet={lineBottomDesktop} />
        <source media="(min-width: 412px)" srcSet={lineBottomMobile} />
        <img className="squigglyBottom" src={lineBottomMobile} alt="" aria-hidden="true" />
      </picture>
      <img src={circle} alt="circle" className="circle-bottom"/>
      <img src={circle} alt="circle" className="circle-top"/>
      <div className='linesPattern'></div>
      <div className="logo"><img src={logo} alt="logo" /></div>

      {!userData ? (
        <Form setUserData={setUserData} />
      ) : (
        <Ticket userData={userData} />
      )}
    </>
  )
}

export default App
