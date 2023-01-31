import { useContext, useState } from "react";
import { useNavigate } from "react-router";

function HomePage() {
  const [name, setName] = useState([''])
  const navigate = useNavigate();

  const change= (e) => {
    setName(e.target.value)
  }

  const click = () => {
    navigate({
      pathname: '/home',
      search: `?name=${name}`
    })  
  }

  

  return (
   
    <div className="App">
      
        
        <h1 className="animate__animated animate__fadeOut animate__delay-2s">Bienvenida a regalitos generator</h1>
        <h1 className="animate__fadeIn animate__animated animate__delay-4s">ESCRIBE TU NOMBRE AQUI</h1> <br /> <p className="animate__fadeIn animate__animated animate__delay-4s">porfi</p>
       
          <input class="form__field" type="text" 
          required name="name"
          value={name}
          onChange={change}
          ></input>
          <button className="button-30"  onClick={click} type="button">Siguiente</button>
        
    </div>
  );
}

export default HomePage;
