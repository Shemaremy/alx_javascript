//Create a function that accepts 5 arguments 

function changeMode (size, weight, transform, background, color) {
    // Using closure, to change the style of the entire page
    return function () {
        const change_style = document.body.style;

        change_style.fontSize = size + 'px';
        change_style.fontWeight = weight;
        change_style.textTransform = transform;
        change_style.backgroundColor = background;
        change_style.color = color;
    };

}
// Create function main that has 3 variables passes argument to changeMode function
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    // Adding paragraph to the body of the page with the text 'Welcome Holberton!'
    const body = document.body;
    // creating div element that contains the paragraph
    const division = document.createElement('div');
    // creating paragraph element
    const para = document.createElement('p');
    // adding text to the paragraph element
    para.innerText = 'Welcome Holberton!';
    // append paragraph element to the div element
    division.appendChild(para);
    // append div element to the body
    body.appendChild(division);

    // Adding button to the body with the text Spooky
    const spooky_button = document.createElement('button');
    // Adding text to the button 
    const spooky_button_text = document.createTextNode('Spooky');
    spooky_button.append(spooky_button_text); 
    // Add button tag to body
    document.body.appendChild(spooky_button);

    // Add a button to the body with the text Dark mode
    const dark_button = document.createElement('button');
    // Adding text to the button 
    const dark_button_text = document.createTextNode('Dark mode');
    dark_button.append(dark_button_text); 
    // Add button tag to body
    document.body.appendChild(dark_button);

    // Add a button to the body with the text Scream mode
    const scream_button = document.createElement('button');
    // Adding text to the button 
    const scream_button_text = document.createTextNode('Scream mode');
    scream_button.append(scream_button_text); 
    // Add button tag to body
    document.body.appendChild(scream_button);

    // Adding event to the button Spooky

    spooky_button.addEventListener('click', function () {
        spooky()
    });

    // Adding event to the button Dark mode

    dark_button.addEventListener('click', function (){
        darkMode()
    });
    // Adding event to the button scream
    scream_button.addEventListener('click', function(){
        screamMode()
    });
}

main()

