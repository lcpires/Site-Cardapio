const button = document.querySelector(".buttonSaberMais")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog .buttonClose")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}