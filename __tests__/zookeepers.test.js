const fs = require("fs");
const { 
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
} = require('../lib/zookeepers');

const { zookeepers } = require('../data/zookeepers.json');

jest.mock('fs');
test("creates new zookeeper", () => {
  const zookeeper = createNewZookeeper(
    { name: "Adam", id: "4003nfsekrlf"},
    zookeepers
  )

  expect(zookeeper.name).toBe("Adam");
  expect(zookeeper.id).toBe("4003nfsekrlf");
});

test("finds by id", () => {
  const zookeepers = [
    {
      id: "3",
      name: "Raksha",
      age: 24,
      favoriteAnimal: "rabbit"
    },
    {
      id: "1",
      name: "Alex",
      age: 32,
      favoriteAnimal: "sloths"
    }
  ];

  const zookeeper = findById("3", zookeepers);

  
  expect(zookeeper.favoriteAnimal).toBe("rabbit");
});


test("filters by query", () => {
  const startingZookeepers = [
    {
      id: "3",
      name: "Raksha",
      age: 24,
      favoriteAnimal: "rabbit"
    },
    {
      id: "1",
      name: "Alex",
      age: 32,
      favoriteAnimal: "sloths"
    }
  ];
  const updatedZookeepers = filterByQuery({ age: 24 }, startingZookeepers);

  expect(updatedZookeepers.length).toBe(1);
});

test("validates zookeeper traits", () => {
  const zookeeper = {
    id: "8",
    name: "Jerry",
    age: 34,
    favoriteAnimal: "Lemur"
  };

  const invalidZookeeper = {
    id: "8",
    name: "Jerry",
    favoriteAnimal: "Lemur"
  }

  expect(validateZookeeper(zookeeper)).toBe(true);
  expect(validateZookeeper(invalidZookeeper)).toBe(false);
});