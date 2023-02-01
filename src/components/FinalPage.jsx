import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css'

export default function FinalPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name')
    const changeImage = () => {
      const img = document.querySelector('img').getAttribute('src')
      if(img  == '/regalo_pic.png' ){
      document.querySelector('img').src = '/text_gift.png'
    } else {
      document.querySelector('img').src = '/regalo_pic.png'
    }
  }
return(     
      <div className="App">
        <h1>ENHORABUENA </h1>
        <h1 className="gift_name">{name} !!</h1>

        <p>Hemos preparado este regalo <br/> <strong>PARA TI</strong></p>
        <img onClick={changeImage} className="regalo-pic" src="/regalo_pic.png"/>

        <p style={{fontSize:"11px"}}>Si te gusta puedes darle un besito a tu novio</p>
      </div>
    );
  }
