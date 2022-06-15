let quantity = document.getElementById('quantity');
let themeButton = document.getElementById('dark-mode');
let dark = document.getElementById('dark');
let light = document.getElementById('light');


let theme = localStorage.getItem('theme');
if(theme == 'dark-mode'){
    document.body.classList.add(theme);
}

themeButton.addEventListener('click', () => {
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
    }else{
        document.body.classList.add('dark-mode');
       localStorage.setItem('theme', 'dark-mode');
    }
}) 

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



