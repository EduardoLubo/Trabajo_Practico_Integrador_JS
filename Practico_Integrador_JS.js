var btnborrar = document.getElementById('Borrar');
btnborrar.addEventListener("click", Borrar);

var btncorreo = document.getElementById('Resumen');
btncorreo.addEventListener("click", Resumen);


function Borrar(){
    document.getElementById("Nombre").value="";
    document.getElementById("Apellido").value="";
    document.getElementById("Correo").value="";
    document.getElementById("Cantidad").value="";
    document.getElementById("Categoria").value="Estudiante";
    document.getElementById("TotalaPagar").innerHTML="Total a Pagar: $";
    document.getElementById("Nombre").focus();
}

function Resumen(){
    let lcnom=document.getElementById("Nombre").value;
    let lcape=document.getElementById("Apellido").value;
    let lcmai=document.getElementById("Correo").value;
    let lccan=document.getElementById("Cantidad").value;
    let lccat=document.getElementById("Categoria").value
    let lcErrTxt="";
    let lnErrcan=0;
    let lcretu = String.fromCharCode(13)
    if (lcnom==="" || lcape==="" || lcmai==="" || lccan===""){
        if (lcnom===""){lnErrcan=lnErrcan+1;lcErrTxt=lcErrTxt+lcretu+parseInt(lnErrcan)+") Falta ingresar el nombre";}
        if (lcape===""){lnErrcan=lnErrcan+1;lcErrTxt=lcErrTxt+lcretu+parseInt(lnErrcan)+") Falta ingresar el Apellido";}
        if (lcmai===""){lnErrcan=lnErrcan+1;lcErrTxt=lcErrTxt+lcretu+parseInt(lnErrcan)+") Falta ingresar un Correo";}
        if (lccan===""){lnErrcan=lnErrcan+1;lcErrTxt=lcErrTxt+lcretu+parseInt(lnErrcan)+") Falta ingresar una cantidad valida";}
        lcErrTxt="Verifique los siguientes errores:"+lcErrTxt;
        alert(lcErrTxt);
        let mielemento = ''
        if (lccan===""){mielemento="Cantidad";}
        if (lcmai===""){mielemento="Correo";}
        if (lcape===""){mielemento="Apellido";}
        if (lcnom===""){mielemento="Nombre";}
        document.getElementById(mielemento).focus();
        return;
    }
    let cvalidar =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    lcmai = lcmai.toLowerCase()
    document.getElementById("Correo").value=lcmai
    if(!cvalidar.test(lcmai)){
        alert("El correo ingresado no tiene un formato valido" );
        document.getElementById("Correo").focus();
        return;
    }
    let lnmaximo = 100
    let lncantidad = lccan 
    if (lncantidad>lnmaximo){
        alert("Solo esta permitido la Compra maxima de "+lnmaximo+" tickets" );
        document.getElementById("Cantidad").focus();
        return;
    }
    let lnpreciobruto=200
    let lndescuento=100
    if(lccat == "Estudiante"){lndescuento = 50} 
    if(lccat == "Trainee"){lndescuento = 80}
    if(lccat == "Junior"){lndescuento = 15}
    lndescuento=(lndescuento/100)
    let lnvaldescuento = (lnpreciobruto*lndescuento)
    let lnprecioneto = lnpreciobruto-lnvaldescuento
    let lnresumen =  lncantidad * lnprecioneto
    document.getElementById("TotalaPagar").innerHTML="Subtotal a Pagar = $ "+(lnpreciobruto*lncantidad)+" - Descuento: $ "+(lnvaldescuento*lncantidad)+" - Total a Pagar: $ "+lnresumen
    }



