// Sample characters with images for the game
const characters = [
  { name: "Arc of the Covenant", image: "images/ARC of the covenant.png" },
  { name: "10 Commandments", image: "images/10 comandments.png" },
  { name: "Burning Bush", image: "images/Burning bush.png" },
  { name: "Burnt Offering", image: "images/Burnt offering.png" },
  { name: "Egyptian Chariot", image: "images/Egyptian Chariot.png" },
  { name: "God", image: "images/God.png" },
  { name: "Seed of Faith", image: "images/Seed of faith.png" },
  { name: "Golden Calf", image: "images/Golden Calf.png" },
  { name: "Israelite Man", image: "images/Isrealite Man.png" },
  { name: "Israelite Woman", image: "images/Isrealite Woman.png" },
  { name: "Jesus", image: "images/Jesus.png" },
  { name: "Joshua", image: "images/Joshua.png" },
  { name: "Mana", image: "images/Mana.png" },
  { name: "Moses", image: "images/Moses.png" },
  { name: "Moses Brass Serpent", image: "images/Moses Brass Serpent.png" },
  { name: "Step of Faith", image: "images/Step of Faith.png" },
  { name: "Pharaoh", image: "images/pharoah.png" },
  { name: "Plagues", image: "images/Plagues.png" },
  { name: "Red Sea", image: "images/Red Sea.png" },
  { name: "River Jordan", image: "images/River Jordan.png" },
  { name: "Sandals", image: "images/Sandals.png" },
  { name: "Step into the Water", image: "images/Step into the water.png" },
  { name: "Sword of the Spirit", image: "images/Sword of the spirit.png" },
  { name: "Temple", image: "images/Temple.png" },
  { name: "Tent", image: "images/Tent.png" }
];

let mysteryCharacter = "";
const gridElement = document.getElementById("character-grid");
const mysteryCardElement = document.getElementById("mystery-card");

// Function to start a new game
function startNewGame() {
  gridElement.innerHTML = "";  // Clear the grid
  mysteryCharacter = characters[Math.floor(Math.random() * characters.length)].name;  // Random character

  // Populate grid with character cards
  characters.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("character-card");

    // Add image to the card
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    img.classList.add("character-img");
    card.appendChild(img);

    // Add name below the image
    const name = document.createElement("p");
    name.classList.add("character-name");
    name.textContent = character.name;
    card.appendChild(name);

    card.onclick = () => flipCard(card);
    gridElement.appendChild(card);
  });

  // Set the mystery card to a random character
  const mysteryCard = characters[Math.floor(Math.random() * characters.length)];
  mysteryCardElement.innerHTML = `
    <img src="${mysteryCard.image}" alt="${mysteryCard.name}">
    <h3>${mysteryCard.name}</h3>
  `;
  console.log(`Mystery character is: ${mysteryCharacter}`);  // For testing purposes
}

// Function to flip a card (toggle visibility of the character)
function flipCard(card) {
  card.classList.toggle("flipped");
}

// Initialize game on page load
startNewGame();