const button = document.querySelector(".buttonSaberMais")
const modal = document.querySelector("dialog")
const buttonClosse = document.querySelector("dialog .buttonClosse")

button.onclick = function () {
    modal.showModal()
}

buttonClosse.onclick = function () {
    modal.close()
}