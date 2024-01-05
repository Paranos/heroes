// outils.js

const ActiveMonsters = {};

// Function to add a monster to ActiveMonsters
async function addMonster(name) {
    try {
        const response = await fetch("./ressources/monsters.json");
        const monstersData = await response.json();

        if (monstersData[name]) {
            ActiveMonsters[name] = monstersData[name];
            console.log(`Added ${name} to ActiveMonsters.`);
        } else {
            console.error(`Monster ${name} not found in monsters.json.`);
        }
    } catch (error) {
        console.error('Error loading monsters.json:', error);
    }
}

// Example: Add a Squelette monster
addMonster("Squelette");

// Example: Add more monsters
addMonster("Gobelin");
addMonster("Orc");

// Function to get the details of a monster
function getMonsterDetails(name) {
    return ActiveMonsters[name];
}

// Example: Get details of the Squelette monster
const squeletteDetails = getMonsterDetails("Squelette");
console.log(squeletteDetails);
