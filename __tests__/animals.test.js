const fs = require('fs');
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal
} = require('../lib/animals.js');

const { animals } = require('../data/animals');

jest.mock('fs');

test('creates an animal object', () => {
  const animal = createNewAnimal(
    { name: "Darlene", id: "jhgdja3ng2" },
    animals
  );


  expect(animal.name).toBe("Darlene");
  expect(animal.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
  const startingAnimals = [
    {
      id: "6",
      name: "Erica",
      diet: "folivore",
      species: "gorilla",
      pesonalityTraits: [
        "quirky",
        "rash"
      ]
    },
    {
      id: "4",
      name: "Coco",
      diet: "penguin",
      species: "piscivore",
      personalityTraits: [
        "loving",
        "goofy"
      ]
    }
  ];

  const updatedAnimal = filterByQuery({species: "gorilla"}, startingAnimals);

  expect(updatedAnimal.length).toBe(1);
})

test("finds by id", () => {
  const startingAnimals = [
    {
      id: "6",
      name: "Erica",
      diet: "folivore",
      species: "gorilla",
      pesonalityTraits: [
        "quirky",
        "rash"
      ]
    },
    {
      id: "4",
      name: "Coco",
      diet: "penguin",
      species: "piscivore",
      personalityTraits: [
        "loving",
        "goofy"
      ]
    }
  ];

  const animal = startingAnimals[0];

  expect(findById("6", startingAnimals)).toBe(animal);
});

test("validates animal traits", () => {
  const animal = {
    id: "6",
    name: "Erica",
    diet: "folivore",
    species: "gorilla",
    personalityTraits: [
      "quirky", 
      "rash"
    ]
  }
  const invalidAnimal = {
    id: "6",
    name: "Erica",
    diet: "folivore",
    species: "gorilla"
  }

  const result = validateAnimal(animal);
  const result2 = validateAnimal(invalidAnimal);

  expect(result).toBe(true);
  expect(result2).toBe(false);
})