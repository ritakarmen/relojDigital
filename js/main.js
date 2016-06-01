function reloj(){
  var myDate= new Date();

  var hora = myDate.getHours();
      hora = (hora<10 ? "0": "")+ hora;
  var minutos= myDate.getMinutes();
      minutos = (minutos<10 ? "0": "")+ minutos;
  var segundos= myDate.getSeconds();
      segundos = (segundos<10 ? "0": "")+ segundos;
  var año= myDate.getFullYear();
  var mes= myDate.getMonth();

              if(mes===0){mes="enero";}
              else if(mes===1){mes="febrero"}
              else if(mes===2){mes="marzo"}
              else if(mes===3){mes="abril"}
              else if(mes===4){mes="mayo"}
              else if(mes===5){mes="junio"}
              else if(mes===6){mes="julio"}
              else if(mes===7){mes="agosto"}
              else if(mes===8){mes="setiembre"}
              else if(mes===9){mes="octubre"}
              else if(mes===10){mes="noviembre"}
              else if(mes===11){mes="diciembre"}
  var dia= myDate.getDay();
              if (dia===0) {dia="Domingo";}
              else if(dia===1){dia="Lunes"}
              else if(dia===2){dia="Martes"}
              else if(dia===3){dia="Miercoles"}
              else if(dia===4){dia="Jueves"}
              else if(dia===5){dia="Viernes"}
              else if(dia===6){dia="Sabado"}
  var diaN= myDate.getDate().toString();


  $("#clock").html(hora + ": "+ minutos + ": "+ segundos)
  $("#fecha").html(dia +", "+ diaN +"  "+ mes+" " + año)
  $("#horaPeru").html(hora + ": "+ minutos)

}

$(document).ready(function(){
  setInterval("reloj()", 1000);
  $(".zona").on("click",zonaHoraria)
})


function zonaHoraria(){

 var zonas=[{zona:"Chicago",
        rest:0},
         {zona:"Sao Paulo",
        rest:2},
         {zona:"Santiago",
        rest:1},
         {zona:"Mexico",
        rest:0},
         {zona:"Brasilia",
        rest:1},
         {zona:"Quito",
        rest:0},
         {zona:"Guayaquil",
        rest:0},
         {zona:"Bogota",
        rest:1}]

  var myDate2 = new Date();

  var checked=this.checked
  var valorPais=parseInt(this.value)

  if(checked){
    hora=myDate2.getHours()+zonas[valorPais].rest
    if(hora>=24)
      hora=hora-24
    if(hora<10)
    hora="0"+hora
    minutos=myDate2.getMinutes()
    if(minutos<10)
    minutos="0"+minutos
    segundos=myDate2.getSeconds()
    if(segundos<10)
    segundos="0"+segundos
    $("#herramienta").append("<div class='row"+valorPais+"'><div class='col-xs-6 text-center'><span class='ciudadPais'>"+zonas[valorPais].zona+"</span></div><div class='col-xs-6 text-center'><span class='hora-ciudadPais'>"+hora+":"+minutos+"</span></div></div>")
  }
  else $(".row"+valorPais).remove()
}