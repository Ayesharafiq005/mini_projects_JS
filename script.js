const countvalue = document.querySelector('#counter');

// const increment = () => {
//     let value = parseInt(countvalue.innerText);
//     value = value + 1;
//     countvalue.innerText = value;
// };

// const decrement = () => {
//     let value = parseInt(countvalue.innerText);
//     value = value - 1; 
//     countvalue.innerText = value; 
// };

const increment = () => {
    let value = parseInt(countvalue.innerText);

    // Step 1: Animate the counter out of view to the right
    countvalue.style.transform = 'translateX(290px)'; 

    // Step 2 & 3: Use a timeout to update and "teleport" the counter
    setTimeout(() => {
        // Update the value after the first animation is done
        value = value + 1;
        countvalue.innerText = value;
        
        // Immediately move the counter to the left side (off-screen)
        countvalue.style.transform = 'translateX(-290px)';
    }, 500); // This delay should match your transition duration

    // Step 4: Animate the counter back to the center
    setTimeout(() => {
        countvalue.style.transform = 'translateX(0)';
    }, 510); // A slightly longer delay to ensure the teleport happens first
};

const decrement = () =>{
    let value = parseInt(countvalue.innerText);

    countvalue.style.transform = 'translateX(-290px)';

    setTimeout(() =>{
        value = value - 1;
        countvalue.innerText = value ;

        countvalue.style.transform = 'translateX(290px)';

    },500);

    setTimeout(() =>{
        countvalue.style.transform = 'translateX(0px)';

    },510); 

    
}



