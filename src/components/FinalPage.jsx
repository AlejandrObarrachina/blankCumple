import { useSearchParams } from "react-router-dom";
import '../App.css'

export default function FinalPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name')
    return (
     
      <div className="App">
        <h1>ENHORABUENA </h1>
        <h1 className="gift_name">{name} !!</h1>

        <p>Hemos preparado este regalo <br/> <strong>PARA TI</strong></p>
        <img className="regalo-pic" src="/regalo_pic.png"/>

        <small style={{fontSize:"12px"}}>Si te gusta puedes darle un besito a tu novio</small>
      </div>
    );
  }


  //TODO: pictures quiz, picture final regalo, confeti, diseño