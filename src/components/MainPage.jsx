import { useSearchParams } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRef } from "react";
import { useNavigate } from "react-router";

import '../App.css'



function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name')
  const slider = useRef(null);
  const navigate = useNavigate();

  const quiz = [
    {
      question: "¿Te gustan los gatos?",
      image: "/foto_gato.jpg",
      options: [
        {value: "Yas"},{value:"Nah"}
      ],
    },
    {
      question: "¿Te gusta el vino?",
      image: "/foto_vino.jpg",
      options: [
        {value: "Yas"},{value:"Nah"}
      ],
    },
    {
      question: "¿Estas libre este 5 de febrero?",
      image: "/foto_plan.jpg",
      options: [
        {value: "Yas"},{value:"Nah"}
      ],
    },

    {
      question: "Enhorabuena has conseguido un regalo",
      image: "/gift.png",
      options: [
        {value: "GENERAR REGALO"}
      ],
    }
  ]
  const click = (e) => {
    if (e.target.value == "GENERAR REGALO") {
      navigate({
        pathname: '/gift',
        search: `?name=${name}`
      })
    }
    
    if (e.target.value == "Yas") {
      slider.current.next(500)
      
    } else{
      slider.current.to(-1, 500)
    }
    
  }
  
  return (
  <div className="MainPage">
    <h1>FELIZ CUMPLEAÑOS {name}</h1>
  
    <OwlCarousel ref={slider} className='owl-theme' margin={10} items={1} dots={false} touchDrag={false}>
      {quiz.map(quizItem => {
        return ( 
        <div className="carousel-cnt" key={quizItem.question}>
          <img className="imagen-quiz" src={quizItem.image}/>
          <h1>{quizItem.question}</h1>
          <div className="button-cnt">
            {quizItem.options.map(( option, key ) => {
                return <button className="button-30" key={key} value={option.value} onClick={click}>{option.value}</button>
              })}
          </div>
            
        </div>
        )
      })}
    </OwlCarousel>

  </div>
  )
}

export default MainPage;
