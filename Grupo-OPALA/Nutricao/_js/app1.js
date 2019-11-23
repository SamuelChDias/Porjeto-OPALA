function calcularIMC(quilos,metros){
           
    var tot = metros.replace(".","");
     tot = tot.replace(",","");
     tot = tot.replace(" ","");
  
      var altura = tot/100;

      var imc = quilos / (altura*altura);
      var result = parseFloat(imc.toFixed(2));
   

  if(result < 18.5){
           document.getElementById("message").innerHTML = result ;
           document.getElementById("message1").innerHTML = "Abaixo do Peso";
          }else if(result >18.5 && imc< 25){
            document.getElementById("message").innerHTML = result ;
            document.getElementById("message1").innerHTML = "Peso Ideal";
          }else if(result > 25 && imc < 30){
            document.getElementById("message").innerHTML = result;
            document.getElementById("message1").innerHTML = "Sobrepeso";
          }else if (result>30) {
            document.getElementById("message").innerHTML = result ;
            document.getElementById("message1").innerHTML = "Obesidade";
          }

    }
    function calcularAgua(quilos){
       
        var agua = (quilos * 35);
        var result = parseFloat(agua.toFixed(2));
     

        var resultado = (result)/1000;
        //alert(resultado + "  Litros de agua Você deve tomar diariamente");
        document.getElementById("messagem").innerHTML = resultado ;
        document.getElementById("messagem1").innerHTML = " Litros de Agua Diariamente";
    }
    function radio(rd,quilos,metros,idade){


          var tot = metros.replace(".","");
           tot = tot.replace(",","");
           tot = tot.replace(" ","");
          var Homens = (13.8 * quilos) ;

          var alt =  (5 * tot);

          var ida =  (6.8 * idade);

          var result = Homens+alt+ida+66.5;
         // alert(result + " Calorias você deve ingerir diariamente");
          return result;

      }

    function radioF(rd,quilos,metros,idade){

           var tot = metros.replace(".","");
           tot = tot.replace(",","");
           tot = tot.replace(" ","");

          var Mulher = (9.5 * quilos) ;

          var alt =  (1.8 * tot);

          var ida =  (4.7 * idade);

          var result1 = Mulher+alt+ida+655.1;
          return result1;
          }


          function radioFinal(rd,quilos,metros,idade){
            if(rd=="M")
            {
              result = radio(rd,quilos,metros,idade);
              document.getElementById("messagemm").innerHTML = result ;
			        document.getElementById("messagemm1").innerHTML = "Calorias você deve ingerir diariamente";
            }else{
              result1 = radioF(rd,quilos,metros,idade);
              document.getElementById("messagemm").innerHTML = result1 ;
              document.getElementById("messagemm1").innerHTML = "Calorias você deve ingerir diariamente";
            }
          }