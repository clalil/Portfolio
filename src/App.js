import {React, useState, useEffect} from "react";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {throttle} from 'lodash';

export const App = () => {
  const handleThrottle = throttle(handleMenuPosition, 20)
  const [prevScrollPos, setprevScrollPos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", handleThrottle)
    return () => {
     window.removeEventListener("scroll", handleThrottle)
    }
  }, [handleThrottle])

  function handleMenuPosition () {
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollPos > currentScrollPos

    setprevScrollPos(currentScrollPos)
    setVisible(visible)
  }

  return (
    <>
      <Hero />
      <About inView={visible}/>
      <Projects inView={visible}/>
    </>
  )
}
