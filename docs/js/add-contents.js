// add-contents 
let today = new Date();
let hourNow = today.getHours();
let greeting;

// alert('Nice to meet you.');

if (hourNow > 18){
    greeting ='Good night';
}
else if (hourNow > 12){
    greeting ='Good afternoon';
}
else if (hourNow > 0){
    greeting ='Good morning';
}
else {
    greeting ='Welcome';
}

document.write('<h3>' + greeting + '</h3>' + 'Neet to meet you');

//Date floor
$(document).ready(function() {

   let today = new Date();
   let year = today.getFullYear();
  
    $('#footer').html('<p>Copyright &copy;' + year + ' ' + 'Dan Wu blog</p>');
  
  });
