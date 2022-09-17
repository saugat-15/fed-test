const main = document.querySelector("#home");
// const section = document.createElement('div')
const cards = document.createElement("div");

// section.innerHTML = `<div class="cards"></div>`

function createCard(fruit) {
  let img1 = "test/images/default/default_1.jpg";
  let header1 = "Hesperidium";
  let description1 =
`Berry with thick, leathery "peel"
(exocarp and mesocarp) and juicy
pulpy endocarp arranged in sections
Juice sac from ovary wall
`
  let img2 = "test/images/default/default_2.png";
  let header2 = "Pepo";
  let description2 =
    "Berry with outer wall or rind formed from receptacle tissue fused to exocarp Fleshy interior is mesocarp and endocarp Lady is a cultivar of apple. The Pink Lady was originally bred by John by crossing the Australian apple Lady Williams with a Golden Delicious to combine the firm long-storing property of Lady Williams with the sweetness and lack of storage scald of Golden Delicious.";

  let img3 = "test/images/default/default_3.jpg";
  let header3 = "Pome";
  let description3 =
    `From compound, inferior ovary (one embedded in surrounding receptacle or perianth tissue); fleshy edible part is ripened tissue surrounding ovary, which matures into "core" and contains seed Fuji apple is an apple hybrid developed by growers at Tohoku Research Station in Fujisaki, Aomori, Japan, in the late 1930s, and brought to market in 1962. It originated as a cross between two American apple varieties - the Red Delicious and old Virginia Ralls Genet apples.`;
  // let img2 = 'test/images/apple/apples_2.jpg';
  // let img3 = 'test/images/apple/apples_3.jpg';

  if (fruit === "apple") {
    img1 = "test/images/apple/apples_1.jpg";
    header1 = "Granny Smith";
    description1 =
      "The Granny Smith is a tip - bearing apple cultivar, which originated in Australia in 1868. It is named after Maria Ann Smith, who propagated the cultivar from a chance seedling.The fruit has hard, light green skin and a crisp, juicy flesh."
    img2 = "test/images/apple/apples_2.jpg";
    header2 = "Pink Lady";
    description2 =
      "Pink Lady is a cultivar of apple. The Pink Lady was originally bred by John by crossing the Australian apple Lady Williams with a Golden Delicious to combine the firm long-storing property of Lady Williams with the sweetness and lack of storage scald of Golden Delicious.";
    img3 = "test/images/apple/apples_3.jpg";
    header3 = "Fuji";
    description3 =
      "The Fuji apple is an apple hybrid developed by growers at Tohoku Research Station in Fujisaki, Aomori, Japan, in the late 1930s, and brought to market in 1962. It originated as a cross between two American apple varieties - the Red Delicious and old Virginia Ralls Genet apples.";
  }

  if (fruit === "banana") {
    img1 = "test/images/banana/banana_1.jpg";
    header1 = "Cavendish";
    description1 =
      "In Australia, Cavendish is the most common variety of banana. It grows on a more compact plant than earlier varieties and was developed to resist plant diseases, insects and wind storms. Cavendish is a medium-sized banana loved for its creamy, smooth texture and thin peel.";
    img2 = "test/images/banana/banana_2.jpg";
    header2 = "Lady Fingers";
    description2 =
      "The popular Lady Finger banana is naturally sweeter and a little smaller than regular bananas. Because they don’t go brown when cut, they make the perfect ingredient for all sorts of fresh dishes. Lady Fingers taste best when fully ripe. When their skin is completely yellow with flecks of black.";
    img3 = "test/images/banana/banana_3.jpg";
    header3 = "Fun Facts!";
    description3 =
      "Banana plants are the largest plants on earth without a woody stem. They are actually giant herbs of the same family as lilies, orchids and palms. Banana plants can grow to heights of up to nine metres and look very much like a tree.";
  }

  if (fruit === "orange") {
    img1 = "test/images/orange/orange_1.jpg";
    header1 = "Valencia";
    description1 =
      "The Valencia orange is a sweet orange. It was first hybridized by pioneer American agronomist and land developer William Wolfskill in the mid-19th century on his farm in Santa Ana in southern California in the United States";
    img2 = "test/images/orange/orange_2.png";
    header2 = "Washington Navel";
    description2 =
      "Navel oranges are characterized by the growth of a second fruit at the apex, which protrudes slightly and resembles a human navel. They are primarily grown for human consumption for various reasons: their thicker skin makes them easy to peel, they are less juicy and their bitterness";
    img3 = "test/images/orange/orange_3.jpg";
    header3 = "Blood Oranges";
    description3 =
      "Blood oranges are a natural mutation of C. sinensis, although today the majority of them are hybrids. High concentrations of anthocyanin give the rind, flesh, and juice of the fruit their characteristic dark red color.";
  }

  let snippet = `
  <div class='cards-section'>
  <div class="cards">
  <div class="card">
      <img src="${img1}"/>
      <h3>${header1}</h3>
    <span>${description1}</span>
  </div>
  <div class="card">
  <img src="${img2}"/>
  <h3>${header2}</h3>
<span>${description2}</span>
  </div>
  <div class="card">
  <img src="${img3}"/>
  <h3>${header3}</h3>
<span>${description3}</span>
  </div>
</div>
</div>`;

  // let snippet2 = `<div>
  // <img src="${img2}">
  // <h3>${header2}</h3>
  // <span>${description2}</span>
  // </div>`;

  // let snippet3 = `<div>
  // <img src="${img3}">
  // <h3>${header3}</h3>
  // <span>${description3}</span>
  // </div>`;

  // if(fruit === 'banana'){cards.innerHTML += snippet1};
  // if(fruit === 'apple'){cards.innerHTML += snippet2};
  // if(fruit === 'orange'){cards.innerHTML += snippet3};

  cards.innerHTML += snippet;
}

createCard('banana');

document.getElementById("index").appendChild(cards);
main.after(cards);
// document.getElementsByClassName('cards').appendChild(cards)
