const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkDados = document.getElementById('link-perfil-dados');
const voltar = document.getElementById('voltar')

// linkPerfil.addEventListener("mouseover", ()=> {
//   navPerfil.style.display = "block"
// })

// window.addEventListener ('keyup', (event) => {
//   console.log(event)

// window.addEventListener ('keyup', (event) => {
//   console.log(linkDados)
document.addEventListener('keydown', (event) => { 

  if (event.code === 'Digit1') {
    if(navPerfil.style.display == 'block') {
      linkDados.click()
    } else {
      navPerfil.style.display = 'block'
    }
  }
  if(event.code === 'Escape') {
    navPerfil.style.display = "none"
  }
  if(event.code === 'Backspace') {
    voltar.click()
  }


})
