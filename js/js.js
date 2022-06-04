let quantity = document.getElementById('quantity');
let modal = document.getElementById('alert');

function increase(){
    quantity.textContent++;
}
function decrease(){
    if (quantity.textContent > 1){
        quantity.textContent--;
    }else {
        quantity.textContent = 1;
    }
    
}

function closeModal(){
    modal.classList.add('d-none');
}

