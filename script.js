let menu =document.querySelector('#menu');
let nav =document.querySelector('#nav');
let header = document.querySelector('#head2')

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
});
window.onscroll  = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
document.getElementById("user").addEventListener('click',function(){
    document.querySelector("#loginbox").style.display = "flex";
   })
   document.querySelector("#close2,#loginbtn").addEventListener('click',function(){
       document.querySelector("#loginbox").style.display ="none";
   })