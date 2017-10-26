document.onclick = CapturaClick;

pantalla = document.getElementById("display");
pantalla.setAttribute('maxlength', '8');

iniciaVariable();

function CapturaClick(e) {
   var HicisteClick = e.target.alt;
   if (HicisteClick === undefined) {
      return;
   }
   if (HicisteClick === "raiz") {
      return;
   }
   if (HicisteClick === "signo") {
      return;
   }
   if (HicisteClick == "On") {
      iniciaVariable();
      pantalla.innerHTML = 0;
      numeroPantalla = 0;
      return;
   }
   switch (HicisteClick) {
      case "por":
         operador = "*";
         Calculadora.operar(operador);
         return;
         break;
      case "dividido":
         operador = "/";
         Calculadora.operar(operador);
         return;
         break;
      case "mas":
         operador = "+";
         Calculadora.operar(operador);
         return;
         break;
      case "menos":
         operador = "-";
         Calculadora.operar(operador);
         return;
         break;
      case "punto":
         operador = ".";
         break;
      case "igual":
         valor = "=";
         Calculadora.igualar();
         return;
         break;
   }
   Calculadora.operacion(HicisteClick);

}
var Calculadora = (function () {
   return {
      operacion: function (valor) {
         if (valor == "punto") {
            valor = "."
         }
         if (numeroPantalla == "0" || inciarPantalla == 1) {
            pantalla.innerHTML = valor;
            numeroPantalla = valor;
            if (valor == ".") {
               if (pantalla.innerHTML.length < 8) {
                  pantalla.innerHTML = "0.";
                  numeroPantalla = valor;
                  coma = 1;
               }
            }
         }
         else {
            if (valor == "." && coma == 0) {
               if (pantalla.innerHTML.length < 8) {
                  pantalla.innerHTML += valor;
                  numeroPantalla += valor;
                  coma = 1;
               }
            }

            else if (valor == "." && coma == 1) { }
            else {
               if (pantalla.innerHTML.length < 8) {
                  pantalla.innerHTML += valor;
                  numeroPantalla += valor
               }
            }
         }
         inciarPantalla = 0
      },
      operar: function (s) {
         Calculadora.igualar();
         numeroEspera = numeroPantalla;
         operacionPendiente = s;
         inciarPantalla = 1;
      },
      igualar: function () {
         if (operacionPendiente == "no") {
            pantalla.innerHTML = numeroPantalla;
            inciarPantalla = 1;
         }
         else {
            sl = numeroEspera + operacionPendiente + numeroPantalla;
            sol = eval(sl);
            pantalla.innerHTML = sol.toString().substring(0, 8);
            numeroPantalla = sol.toString().substring(0, 8);
            operacionPendiente = "no";
            inciarPantalla = 1;
         }
      }
   }
})();

function iniciaVariable() {
   numeroPantalla = "0";
   inciarPantalla = 1;
   coma = 0;
   numeroEspera = 0;
   operacionPendiente = "no";

   valorGuardado = "0";
   ultimoValor = "";
}