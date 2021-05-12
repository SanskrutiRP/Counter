
let zero = 0;
let rotateY = 180;
let count1 = 0;
let container = document.getElementById('container');
let dec = document.getElementById('dec');
let inc = document.getElementById('inc');
let counter = document.getElementById('count');
let curr_count = count.innerText; 
dec.addEventListener('click', () =>  {
    if(count1 % 2 == 0){
        curr_count--;
        zero-=rotateY;
    }
    else{
        curr_count++;
        zero+=rotateY;
    }
    container.style.transitionDuration = '.5s';
    container.style.transform = 'rotateY('+zero+'deg)';
    updateCounter(curr_count);
    counter.style.transform = 'rotateY('+zero+'deg)';
    count1++;
});

inc.addEventListener('click', () => {
    if(count1 % 2 == 0){
        curr_count++;
        zero+=rotateY;
    }
    else{
        curr_count--;
        zero-=rotateY;
    }
    container.style.transitionDuration = '.5s';
    container.style.transform = 'rotateY(' + zero + 'deg)';
    updateCounter(curr_count);
    counter.style.transform = 'rotateY('+zero+'deg)';
    count1++;
});

function updateCounter(c){
    counter.innerText = c;
}
