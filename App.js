import React from 'react';
import './App.css';

function App() {
  let ans = document.getElementById("ans");

   //starts from here all functions
   //for magnitude of A
   let magA=()=>{
    document.getElementsByClassName("result")[0].style.display="flex";

    let i = document.getElementById("i1").value;
    let j = document.getElementById("j1").value;
    let k = document.getElementById("k1").value;

    let mag = (Math.sqrt(((i**2)+(j**2)+(k**2))));
    ans.value = mag.toFixed(4);
   }

   //for magnitude of B

   let magB=()=>{
    document.getElementsByClassName("result")[0].style.display="flex";

    let i = document.getElementById("i2").value;
    let j = document.getElementById("j2").value;
    let k = document.getElementById("k2").value;

    let mag = (Math.sqrt(((i**2)+(j**2)+(k**2))));
    ans.value =mag.toFixed(4);

   }

   //for the cross product of a*b

   let cross=()=>{
    document.getElementsByClassName("result")[0].style.display="flex";

    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);

    const ic = (j1*k2)-(k1*j2);
    const jc = (i1*k2)-(k1*i2);
    const kc = (i1*j2)-(j1*i2);

    const product =(` ${ic}i ${jc}j ${kc}k`);

    ans.value = product;

   }

   let dot=()=>{
    document.getElementsByClassName("result")[0].style.display="flex";

    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);

    const ic = i1*i2;
    const jc = j1*j2;
    const kc = k1*k2;

    const product = ic+jc+kc;

   ans.value= product;

   }

   //to add a and b A+B

   let add = ()=>{
    document.getElementsByClassName("result")[0].style.display="flex";

    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);
   
    
    let i,j,k;

    i = i1+i2;
    j = j1+j2;
    k = k1+k2;
   let  vec = (i+"i ")+(j+"j ")+(k+"k ");
   ans.value = vec;


   }

   //subtracting A-B

   let subtr = ()=>{
    document.getElementsByClassName("result")[0].style.display="flex";

    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);
   
    let i,j,k;
    i = i1-i2;
    j = j1-j2;
    k = k1-k2;
    let vec = (i+"i ")+(j+"j ")+(k+"k ");
    ans.value= vec;

   }

  return (
    <body>
      <header className='Header'>
        <h1>Vectorious🦅</h1>
      </header>
      <section className='sec1 sec'>
        <br />
        <form name='f1' className='form'>

          <div className="cont">
            <label htmlFor="">Vector a :</label> <br />
            <div className="adiv">
              <div className="ijk"><input type="number" className='inputs' id='i1' />i</div>
              <div className="ijk"><input type="number" className='inputs' id='j1' />j</div>
              <div className="ijk"><input type="number" className='inputs' id='k1' />k</div>

            </div>
            </div>

            <div className="cont">
              <label htmlFor="">Vector b :</label> <br />
              <div className="adiv">
                <div className="ijk"><input type="number" className='inputs' id='i2' />i</div>
                <div className="ijk"><input type="number" className='inputs' id='j2' />j</div>
                <div className="ijk"><input type="number" className='inputs' id='k2' />k</div>
              </div>
            </div>
          
        </form>
        <br /><br /> <br />
        <div className="btncont">
          <div className="seperator">
            <button id='' className='btns'onClick={add} >A+B</button>
            <button id='' className='btns' onClick={subtr}>A-B</button>
            <button id='' className='btns' onClick={magB}>Mag-B</button>

            <button id='' className='btns' onClick={magA} >Mag-A</button>
          </div>
          <div className="seperator">

            <button id='' className='btns'onClick={dot} >Dot Product</button>
            <button id='' className='btns' onClick={cross}>Cross Product</button>
          </div>


         
        </div>
      </section>
      <section className='sec2 sec'>

        <div className="result">
         <input type="text" name="answer" id="ans" readOnly />
        </div>

      </section>
      <br /><br /><br /><br />
      <footer>
      <p> Javascript</p>
      
      <p> © Dev/designed by: <a href="https://prathx.netlify.app" style={{color:"#6b6b6b"}}> Prathamesh karve!🤟🏻 </a></p>
    
    </footer>
    </body>
  );
}

export default App;
