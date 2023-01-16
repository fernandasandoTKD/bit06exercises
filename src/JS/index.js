'use strict';
const $form=document.getElementById('form');
const $legend=document.getElementsByTagName("legend")[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');


const formulario={ //Objeto, se declara llave valor
   user:null,
   pass:null
};


const alert = (message, type) => {
   const wrapper = document.createElement('div');
   wrapper.innerHTML = [
     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
     `   <div>${message}</div>`,
     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
     '</div>',
   ].join('');
   alertPlaceholder.append(wrapper);
 };

$form.user.addEventListener('input', (e) =>{
 formulario.user=e.target.value;
});

$form.pass.addEventListener('input', (e) =>{
   formulario.pass=e.target.value;
});

$form.addEventListener('submit',(e)=>{
   e.preventDefault();

   if (verFormulario () === true) {
      verUser(formulario);
    } else {
      alert('*Todos los campos son obligatorios.', 'danger');
    }

   /* if(!formulario.user){
      $legend.classList.add('text-danger');
      console.log('error...');
   } */

});

function verFormulario() {
   if (formulario.user && formulario.pass)
     return true;
   else return false;
 }

 function verUser(obj){
  /*  const permitido={
      user:"Luisa",
      pass:1030,
   };
   if(obj.user===permitido.user && 
      parseInt(obj.pass)===permitido.pass){
      console.log("Bienvenido");
   }else{
      console.log("No permitido");
   } */
 try{
    const permitido={
      user:"Luisa",
      pass:1030,
   };
   if(obj.user===permitido.user && 
      parseInt(obj.pass)===permitido.pass){
      
       window.open("../exercises.html","_self"); 
   }else{
      alert('¡Acceso denegado! revise sus credenciales', 'warning');
   } 
 }catch(error){
   console.log('Se produjo un error, en la función verificación de usuario', error);
 }
}



