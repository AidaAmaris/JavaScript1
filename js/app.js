  (function Calculadora(){
    //variables
    //operaciones  a+b a/b a*b a-b
    var a; // operando a
    var b="0"; // operando b
    var operacion; // Define el tipo de operación + - * /
    var res=""; // devuelve el resultado de la operación
    // variables usadas en la funcion resultado
    var resstring="";
    var l;
    //pantalla
    var display = document.getElementById("display");
    //encender y reset
    var on = document.getElementById("on");
    //simbolos
    var signo = document.getElementById("sign");
    var division = document.getElementById("dividido");
    var punto = document.getElementById("punto");
    var igual = document.getElementById("igual");
    var suma = document.getElementById("mas");
    var resta = document.getElementById("menos");
    var multiplicacion = document.getElementById("por");
    var raiz = document.getElementById("raiz");
    //numeros
    var cero  = document.getElementById("0");
    var uno  = document.getElementById("1");
    var dos  = document.getElementById("2");
    var tres  = document.getElementById("3");
    var cuatro  = document.getElementById("4");
    var cinco  = document.getElementById("5");
    var seis  = document.getElementById("6");
    var siete  = document.getElementById("7");
    var ocho  = document.getElementById("8");
    var nueve  = document.getElementById("9");
    //----------------------------------------------------------------------------
    //Eventos
    // Efecto: presionar las teclas de la calculadora
  //  uno.addEventListener("mousedown", function(){uno.style.padding="1px";});
  //  uno.addEventListener("mouseup", function(){uno.style.padding="0px";});
  //  uno.onmousedown = function(){uno.style.padding="1px";}
  //  uno.onmouseup = function(){uno.style.padding="0px";}

    uno.addEventListener("mousedown", function(){uno.style.padding="1px";});
    uno.addEventListener("mouseup", function(){uno.style.padding="0px";});

    dos.addEventListener("mousedown", function(){dos.style.padding="1px";});
    dos.addEventListener("mouseup", function(){dos.style.padding="0px";});

    tres.addEventListener("mousedown", function(){tres.style.padding="1px";});
    tres.addEventListener("mouseup", function(){tres.style.padding="0px";});

    cuatro.addEventListener("mousedown", function(){cuatro.style.padding="1px";});
    cuatro.addEventListener("mouseup", function(){cuatro.style.padding="0px";});

    cinco.addEventListener("mousedown", function(){cinco.style.padding="1px";});
    cinco.addEventListener("mouseup", function(){cinco.style.padding="0px";});

    seis.addEventListener("mousedown", function(){seis.style.padding="1px";});
    seis.addEventListener("mouseup", function(){seis.style.padding="0px";});

    siete.addEventListener("mousedown", function(){siete.style.padding="1px";});
    siete.addEventListener("mouseup", function(){siete.style.padding="0px";});

    ocho.addEventListener("mousedown", function(){ocho.style.padding="1px";});
    ocho.addEventListener("mouseup", function(){ocho.style.padding="0px";});

    nueve.addEventListener("mousedown", function(){nueve.style.padding="1px";});
    nueve.addEventListener("mouseup", function(){nueve.style.padding="0px";});

    cero.addEventListener("mousedown", function(){cero.style.padding="1px";});
    cero.addEventListener("mouseup", function(){cero.style.padding="0px";});

    signo.addEventListener("mousedown", function(){signo.style.padding="1px";});
    signo.addEventListener("mouseup", function(){signo.style.padding="0px";});

    raiz.addEventListener("mousedown", function(){raiz.style.padding="1px";});
    raiz.addEventListener("mouseup", function(){raiz.style.padding="0px";});

    division.addEventListener("mousedown", function(){division.style.padding="1px";});
    division.addEventListener("mouseup", function(){division.style.padding="0px";});

    multiplicacion.addEventListener("mousedown", function(){multiplicacion.style.padding="1px";});
    multiplicacion.addEventListener("mouseup", function(){multiplicacion.style.padding="0px";});

    resta.addEventListener("mousedown", function(){resta.style.padding="1px";});
    resta.addEventListener("mouseup", function(){resta.style.padding="0px";});

    suma.addEventListener("mousedown", function(){suma.style.padding="1px";});
    suma.addEventListener("mouseup", function(){suma.style.padding="0px";});

    on.addEventListener("mousedown", function(){on.style.padding="1px";});
    on.addEventListener("mouseup", function(){on.style.padding="0px";});

    igual.addEventListener("mousedown", function(){igual.style.padding="1px";});
    igual.addEventListener("mouseup", function(){igual.style.padding="0px";});

    punto.addEventListener("mousedown", function(){punto.style.padding="1px";});
    punto.addEventListener("mouseup", function(){punto.style.padding="0px";});

    // lo que sucede al hacer click sobre cada tecla de la calculadora
    uno.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "1";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "1";
      }
    dos.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "2";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "2";
      }
    tres.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "3";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "3";
      }
    cuatro.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "4";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "4";
      }
    cinco.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "5";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "5";
      }
    seis.onclick = function(){
        if (res!=display.innerHTML) {
          if (display.innerHTML.length<8)
            {
              if(display.innerHTML=="0"){
                limpiar();
              }
              display.innerHTML =display.innerHTML+  "6";
            }else
              display.innerHTML=display.innerHTML;
        }else
          display.innerHTML =  "6";
        }
    siete.onclick = function(){
        if (res!=display.innerHTML) {
          if (display.innerHTML.length<8)
            {
              if(display.innerHTML=="0"){
                limpiar();
              }
              display.innerHTML =display.innerHTML+  "7";
            }else
              display.innerHTML=display.innerHTML;
        }else
          display.innerHTML =  "7";
        }
    ocho.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "8";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "8";
      }
    nueve.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "9";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "9";
      }
    cero.onclick = function(){
      if (res!=display.innerHTML) {
        if (display.innerHTML.length<8)
          {
            if(display.innerHTML=="0"){
              limpiar();
            }
            display.innerHTML =display.innerHTML+  "0";
          }else
            display.innerHTML=display.innerHTML;
      }else
        display.innerHTML =  "0";
      }
    punto.onclick = function(){
      display.innerHTML=parseFloat(display.innerHTML);
      if (display.innerHTML % 1 ==0) {
        if (display.innerHTML=="0") {
          display.innerHTML = "0."
        }
        else if (res==display.innerHTML){
            display.innerHTML = "0."
        }else {
          display.innerHTML =display.innerHTML+  ".";
        }
      } else if (display.innerHTML =="NaN"){
        display.innerHTML = "0."
      }else if (res==display.innerHTML){
          display.innerHTML = "0."
      }
      display.innerHTML =display.innerHTML+  "";
    }
    on.onclick = function(){
      reset();
    }
    sign.onclick = function(){
      display.innerHTML=parseFloat(display.innerHTML);
      if (display.innerHTML>0) {
        display.innerHTML = "-" + display.innerHTML;
      }else if (display.innerHTML==0){
        display.innerHTML= Math.abs(parseFloat(display.innerHTML));
      }else if (display.innerHTML<0){
        display.innerHTML= Math.abs(parseFloat(display.innerHTML));
      }else
        display.innerHTML = "-";
    }
    suma.onclick = function(){
      a=display.innerHTML;
      b="0";
      operacion = "+";
      limpiar();
    }
    resta.onclick = function(){
      a=display.innerHTML;
      b="0";
      operacion = "-";
      limpiar();
    }
    multiplicacion.onclick = function(){
      a=display.innerHTML;
      b="0";
      operacion = "*";
      limpiar();
    }
    division.onclick = function(){
      a=display.innerHTML;
      b="0";
      operacion = "/";
      limpiar();
    }

    igual.onclick = function(){
        if (operacion=="+"||operacion=="-"||operacion=="*"||operacion=="/"){
          if (b=="0") {
            b=display.innerHTML;
          }
          b=b;
          resolver();
        }
        display.innerHTML=display.innerHTML;
    }
    //----------------------------------------------------------------------------
    //Definicion de los metodos

    function limpiar(){
      display.innerHTML = "";
    }

      function reset(){
        display.innerHTML = "0";
        a = "";
        b = "0";
        res="";
        operacion = "";
      }

    function resolver(){
      switch (operacion) {
        case "+":
          res = parseFloat(a) + parseFloat(b) //parseFloat funcion que convierte una caddena a un numero punto flotante
          break;

        case "-":
          res = parseFloat(a) - parseFloat(b)
          break;

        case "*":
          res = parseFloat(a) * parseFloat(b)
          break;

        case "/":
          res = parseFloat(a) / parseFloat(b)
          break;
      }

        resstring = res.toString();
        l = resstring.length;
        vector = Array.from(resstring);
        if (l>=8) {
          if (res>0) {
              display.innerHTML=vector[0]+vector[1]+vector[2]+vector[3]+vector[4]+vector[5]+vector[6]+vector[7];
          }else {
            if (l>=9) {
              display.innerHTML=vector[0]+vector[1]+vector[2]+vector[3]+vector[4]+vector[5]+vector[6]+vector[7]+vector[8];
            }
              display.innerHTML=vector[0]+vector[1]+vector[2]+vector[3]+vector[4]+vector[5]+vector[6]+vector[7];
          }
        }else {
          display.innerHTML=res;
        }

        return a=res;
      }
      return res;
  })();
