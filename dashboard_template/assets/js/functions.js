const main = `127.0.0.1`

function getOrderStatus(){
    /* const status = await (await fetch(main)).text() */
    return "Online"
}

function setStatusToPage(status) {
    const statusElement = document.querySelector("#status")
    statusElement.innerText = status
}

setStatusToPage(getOrderStatus())