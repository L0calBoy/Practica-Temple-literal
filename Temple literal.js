"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 100 + 1;
    }
    const nombre = "Jose";
    const edad = 20;
    const apellido = "Arias";
    // Jose Arias (Edad:33)
    //const salida = nombre +" "+apellido+" "+"(Edad:"+edad+")";
    // sin temple literal
    // baktik alt  96 / 139 
    //const salida = `${nombre} \n${apellido} \n(Edad:${edad})`;
    // alt 92
    const salida = `    
${nombre} 
${apellido} 
(Edad:${getEdad()})`;
    // dentro de las { es codigo puro puedo hacer lo que quiera con esas variables}
    // tambien hace salto de linea con enter :O 
    console.log(salida);
})();
