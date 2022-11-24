 import '../Styles/Home.css';



function Home(){

return(

    <>
    
    <header>
<p class="logo">VIMI</p> 
        <nav nameClass="nav_links">
            <a href="#">Home</a>
            <a href="#">Lojas</a>
            <a href="#">Eventos</a>
            <a href="#">Educação</a>
        </nav>

       

          
        <input type="text" nameClass="texto"></input>

        <div nameClass='bt' >
            <button nameClass="b1">Entre</button>
            <button nameClass="b2">Cadastre-se</button>
            
        </div>
        
        <div nameClass="menu_icon_mobile">

        <button><img src={"menu_white_36dp.svg"}  alt="" /></button>
          
        </div>
        
        <div nameClass="menu_mobile">
          <nav>
            <a href="#">Home</a>
            <a href="#">Lojas</a>
            <a href="#">Eventos</a>
            <a href="#">Educação</a>
        </nav>

        <div id='bt' >
          <button id="b1">Entre</button>
          <button id="b2">Cadastre-se</button>
          
      </div>
        </div>
    
    </header>



    <div nameClass='main'>
      <p>Só na VIMI você
        encontra quem te  valoriza de verdade!
        </p>

        <div nameClass="conteiner">
          <p>Quer vender 
            a <span>sua arte </span> 
            na nossa 
            plataforma?
            </p>
            <button>Saiba Mais!</button>
        </div>
    </div>
    
    </>
);

}

export default Home;