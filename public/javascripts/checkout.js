var correo = document.querySelector('.enviocorreo')
var particular = document.querySelector('.envioparticular')
var retiro = document.querySelector('.retiro')

var correoData = document.querySelector('.enviocorreodata')
var particularData = document.querySelector('.envioparticulardata')
var domicilioData = document.querySelector('.domiciliodata')

correo.addEventListener('click',()=>{
    particular.classList.toggle('hidden')
    retiro.classList.toggle('hidden')
    correoData.classList.toggle('hidden')
})

particular.addEventListener('click',()=>{
    correo.classList.toggle('hidden')
    retiro.classList.toggle('hidden')
    particularData.classList.toggle('hidden')
})

retiro.addEventListener('click',()=>{
    particular.classList.toggle('hidden')
    correo.classList.toggle('hidden')
    domicilioData.classList.toggle('hidden')
})