import "./index.css";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto md:ml-auto ml-[7%] relative">

      <Header
      scrolling={scrolling}/>
      <Main/>
      <Footer/>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} alt=""/>
          </button>
        )
      }
    </div>
  );
}

export default App;