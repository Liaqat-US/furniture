var open = document.getElementById('openmenu');
var close = document.getElementById('close');
var menu = document.getElementById('mobilemenu');

open.addEventListener('click',function(){
    menu.style.display = 'block';
});

close.addEventListener('click',function(){
    menu.style.display = 'none';
});