let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("Alert.")

})

const second_button = document.getElementById('second');
const heading = document.querySelector('h3');

second_button.addEventListener('click', function(){
    heading.style.color = "cyan";
    second_button.textContent = "Změnila se barva!";
});


    document.getElementById("third").addEventListener("click", function() {
        document.getElementById("nadpis").innerText = "Změnil se text!";

})

function ShowText() {
    var p = document.createElement("p");
    p.innerText = "Ahoj, tohle je text, který hledáš!";
    document.getElementById('text').appendChild(p);
}

function displayMessage() {
    let name = document.getElementById("name").value;
    if (name) {
        alert("Vítej, " + name + "!")
    }
}

function changeHeadingText() { document.getElementById('heading').textContent = 'Změněno'; }

function resetHeadingText() { document.getElementById('heading').textContent = 'Úkol č. 7'; }

let time = document.getElementById('time');
const stime =  document.getElementById('stime');

time.addEventListener('click', function(){
    const timern = new Date();
    const realtime = timern.toLocaleTimeString();
    stime.textContent = 'Zdejší čas: ' + realtime;
})

let date = document.getElementById('date');
const sdate = document.getElementById('sdate');

date.addEventListener('click', function(){
    const datern = new Date();
    const realdate = datern.toLocaleDateString();
    sdate.textContent = 'Zdejší datum: ' + realdate;
})

function plus3() {
    const vstup = document.getElementById("cislo10").value;
    const vysledek10 = parseInt(vstup) + 3;
    document.getElementById("vysledek10").innerText = "Výsledek: " + vysledek10;
}

function sumHodnoty() {
    const cislo1 = parseFloat(document.getElementById("cislo111").value);
    const cislo2 = parseFloat(document.getElementById("cislo211").value);
    const vysledek11 = cislo1 + cislo2;
    document.getElementById("vysledek11").innerText = "Výsledek: " + vysledek11;
}

const image = document.getElementById('zvetsitObrazek');

image.addEventListener('mouseenter', () => {
  image.style.width = '400px';
});

image.addEventListener('mouseleave', () => {
  image.style.width = '200px';
});

function pridatUkol() {
    const ukolInput = document.getElementById("ukolInput");
    const datumInput = document.getElementById("datumInput");
    const casInput = document.getElementById("casInput");

    const ukolText = ukolInput.value.trim();
    const datumText = datumInput.value;
    const casText = casInput.value;

    const li = document.createElement("li");
    li.textContent = `${ukolText} (Do: ${datumText} ${casText})`;

    li.onclick = function() {
        li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    };

    document.getElementById("ukoly").appendChild(li);
}