const board = document.getElementById("board");
const seedButton = document.getElementById("seedButton");

let cards = [];

const createElement = (obj) => {
    // get the type and create an element with it
    let type = obj.type;
    let el = document.createElement(type);
    if (obj.className) {
     el.className = obj.className;
    }
    if (obj.childText) {
     let text = document.createTextNode(obj.childText);
     el.appendChild(text);
    }
    if (obj.src) {
      el.setAttribute("src", obj.src);
     }
     return el;
   }

const generateCard = (i) => {
    return {
        id: i,
        imgURL: `https://picsum.photos/300/300?sig=${i}`,
    };
};

const seedCards = (numCards = 10) => {
    let i = 0;
    while (i < numCards) {
        cards.push(generateCard(i));
        i++;
    };
};

const createCard = (card) => {

};

const drawCards = () => {
    // go through cards and create image elements for each of them
    const cardImages = cards.map((card) => (createCard(card)));
    board.append(...cardImages);
};

// events bubble up to the body tag through each of their parents
// the click event should trigger one listener at the top level
// it takes (e) as an argument, evaluate e.target in the function (location where event started)

const main = () => {
    cards = []

    seedCards(10);
    board.innerHTML = '';
    drawCards();
}

main();
