import React, { useState ,useEffect , useRef} from 'react';
import '../stylesheets/home.css';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [input,setinput] = useState("");
  const showresults = ()=>{
    console.log(input);
  }

  const fadediv1 = useRef(null);
  const fadediv2 = useRef(null);
  const fadediv3 = useRef(null);

  useEffect(()=>{
    const el1 = fadediv1.current;
    gsap.fromTo(el1,{opacity:0},{
      opacity:100,
      scrollTrigger:{
        trigger:el1,
        scroller:'body',
        // markers:true,
        start:'top 80%'
      }
    })

    const el2 = fadediv2.current;
    gsap.fromTo(el2,{opacity:0,y:-50},{
      opacity:100,
      y:0,
      scrollTrigger:{
        trigger:el2,
        scroller:'body',
        // markers:true,
        start:'top 80%'
      }
    })

    const el3 = fadediv3.current;
    gsap.fromTo(el3,{y:100},{
      y:0,
      scrollTrigger:{
        trigger:el3,
        scroller:'body',
        // markers:true,
        start:'top 95.2%'
      }
    })
  },[])

  return (
    <div id='base'>
    <div className="div-box" id='d1' >
      <div className="filter">
        <form className="search">
          <h1>Find Your Meal</h1>
          <input
            type="search" 
            placeholder='Search' 
            value={input} 
            onChange={(e)=>{setinput(e.target.value)}}
           />
          <button onClick={showresults()}>Search</button>
          
        </form>
      </div>
    </div>
    <div className="filler-div" ref={fadediv3}>
    </div>
    <div className="billboard" ref={fadediv1}>
      <div className="meals">
        <div className="meal1"></div>
        <div className="meal2"></div>
      </div>
      <h1>Choose Delicacy the Best <br/>Healthy way of Life</h1>
    </div>
    <div className="div-box" id='d2'>
      <h1>Choose Your Meal</h1>
      
      <div className="variety-container" ref={fadediv2}>
        <Link to={'/sandwiches'}>
          <div className="variety" id='sandwiches'>
            <div className="filter2">
              <h3>Sandwiches</h3>
            </div>
          </div>
        </Link>
        
        <Link to={'/bbqs'}>
          <div className="variety" id='Barbeque'>
            <div className="filter2">
              <h3>Barbeque</h3>
            </div>
          </div>
        </Link>

        <Link to={'/chicken'}>
          <div className="variety" id='Chicken'>
            <div className="filter2">
              <h3>Chicken</h3>
            </div>
          </div>
        </Link>

        <Link to={'/sausages'}>
          <div className="variety" id='Sausages'>
            <div className="filter2">
              <h3>Sausages</h3>
            </div>
          </div>
        </Link>
        
        <Link to={'/pizzas'}>
          <div className="variety" id='Pizzas'>
            <div className="filter2">
              <h3>Pizzas</h3>
            </div>
          </div>
        </Link>

        <Link to={'/burgers'}>
          <div className="variety" id='Burgers'>
            <div className="filter2">
              <h3>Burgers</h3>
            </div>
          </div>
        </Link>

        <Link to={'/ice-cream'}>
          <div className="variety" id='Ice-Cream'>
            <div className="filter2">
              <h3>Ice Cream</h3>
            </div>
          </div>
        </Link>
      </div>
      
    </div>
    <div className="div-box" id='d3'>
      <h2>Services</h2>
      <div className="specialities">
        <div className="service"><h3>Hygenic Food</h3></div>
        <div className="service"><h3>Home Delivery</h3></div>
        <div className="service"><h3>Reasonable Discounts</h3></div>
        <div className="service"><h3>Proper Packaging</h3></div>
        <div className="service"><h3>Giveaways</h3></div>
      </div>
      <footer>
        <h2>Food Heap</h2>
        <div className="footer-material">
          <div className="hyperlinks">
            <h3>About</h3>
            <Link>Who we are</Link>
            <Link>Blog</Link>
            <Link>Invester Relation</Link>
            <Link>Work with Us</Link>
          </div>
          <div className="hyperlinks">
            <h3>Learn More</h3>
            <Link>Privacy</Link>
            <Link>Security</Link>
            <Link>Terms & Conditions</Link>
            <Link>Sitemap</Link>
          </div>
          <div className="hyperlinks">
            <h3>Contact Us</h3>
            <Link>Instagram</Link>
            <Link>Facebook</Link>
            <Link>twitter</Link>
            <Link>Youtub3</Link>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home