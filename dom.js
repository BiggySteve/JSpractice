let add_element = () => {
    const heading1 = document.createElement('h1');
    heading1.innerHTML = "Green Planet";
    document.body.appendChild(heading1);

    const par1 = document.createElement('p');
    par1.innerHTML = "All is well";
    par1.setAttribute('id', "greenplanet");
    par1.setAttribute('class', "redtext");
    document.body.appendChild(par1);

    const heading2 = document.createElement('h1');
    heading2.innerHTML = "Red Planet";
    document.body.appendChild(heading2);

    const par2 = document.createElement('p');
    par2.innerHTML = "Nothing to report";
    par2.setAttribute('id', "redplanet");
    document.body.appendChild(par2);

    const heading3 = document.createElement('h1');
    heading3.innerHTML = "Blue Planet";
    document.body.appendChild(heading3);

    const par3 = document.createElement('p');
    par3.innerHTML = "All systems A-OK";
    par3.setAttribute('id', "blueplanet");
    document.body.appendChild(par3);
}

add_element();

function init() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.style.color = "red";
}

window.onload = init;


 