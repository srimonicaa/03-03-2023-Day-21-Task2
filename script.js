const uri = "https://cat-fact.herokuapp.com/facts";
const catscontainer = document.getElementById("cats-container");
let cat = [];

function handleSearch(target) {
    const search = target.value.toLowerCase();
    const searchMatch = cat.filter((element) => {
      const name = element.name.toLowerCase();
      return name.includes(search);
    });
    renderCards(searchMatch);
  }
  
  async function fetchData() {
    const response = await fetch(uri);
    const data = await response.json();
    if (data.length > 0) {
      cat = [...data];
      renderCards(cat);
    }
  }
  fetchData();
  function renderCards(data = []) {
    let cards = [];
    for (let i = 0; i < data.length; i++) {
      cards.push(createCard(data[i]));
    }
    catscontainer.innerHTML = "";
    catscontainer.append(...cards);
  }

  function createCard(data = {}) {
    let card = document.createElement("div");
    let subHeading1 = document.createElement("p");
    let subHeading2 = document.createElement("p");
    let subHeading3 = document.createElement("p");
    let subHeading4 = document.createElement("p");
    let subHeading5 = document.createElement("p");
    let subHeading6 = document.createElement("p");
  
    card.setAttribute("class", "card");
   
    const { _id = "", user = "", text = "", updatedAt = "", type = "", createdAt = "" } = data;

    subHeading1.innerText = _id;
    const a1 = document.createElement("p");
    const b1 = document.createTextNode("ID :")
              const c1 = document.createTextNode(" ")
              a1.append(b1,c1,subHeading1.innerText);
              card.append(a1);
    
    subHeading2.innerText = user;
    const a2 = document.createElement("p");
    const b2 = document.createTextNode("User :")
              const c2 = document.createTextNode(" ")
              a2.append(b2,c2,subHeading2.innerText);
              card.append(a2);
    
    subHeading3.innerText = text;
    const a3 = document.createElement("p");
    const b3 = document.createTextNode("Text :")
              const c3 = document.createTextNode(" ")
              a3.append(b3,c3,subHeading3.innerText);
              card.append(a3);
    
    subHeading4.innerText = updatedAt;
    const a4 = document.createElement("p");
    const b4 = document.createTextNode("Updated At :")
              const c4 = document.createTextNode(" ")
              a4.append(b4,c4,subHeading4.innerText);
              card.append(a4);
  
    subHeading5.innerText = type;
    const a5 = document.createElement("p");
    const b5 = document.createTextNode("Type :")
              const c5 = document.createTextNode(" ")
              a5.append(b5,c5,subHeading5.innerText);
              card.append(a5);

    subHeading6.innerText = createdAt;
    const a6 = document.createElement("p");
    const b6 = document.createTextNode("Created At :")
              const c6 = document.createTextNode(" ")
              a6.append(b6,c6,subHeading6.innerText);
              card.append(a6);

    return card;
  }
  
  
  
