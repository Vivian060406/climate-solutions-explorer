 //******************************************
 // Name: Khanh Vy Tran
 // File: solutions.js
 //******************************************/
const solutionData = require("../data/solutionData");
const sectorData = require("../data/sectorData");

let solutions = [];

function initialize() {
  return new Promise((resolve, reject) => {
    try {
      solutions = [];

      solutionData.forEach((solution) => {
        const sector = sectorData.find(
          (sector) => sector.id === solution.sector_id
        );

        solutions.push({
          ...solution,
          sector: sector.sector_name
        });
      });

      resolve();
    } catch (err) {
      reject("Unable to initialize solutions");
    }
  });
}

function getAllSolutions() {
  return new Promise((resolve, reject) => {
    if (solutions.length > 0) {
      resolve(solutions);
    } else {
      reject("No solutions available");
    }
  });
}

function getSolutionById(solutionId) {
  return new Promise((resolve, reject) => {
    const foundSolution = solutions.find((solution) => {
      return solution.id === Number(solutionId);
    });

    if (foundSolution) {
      resolve(foundSolution);
    } else {
      reject("Unable to find requested solution");
    }
  });
}

function getSolutionsBySector(sector) {
  return new Promise((resolve, reject) => {
    const foundSolutions = solutions.filter((solution) => {
      return solution.sector.toLowerCase().includes(sector.toLowerCase());
    });

    if (foundSolutions.length > 0) {
      resolve(foundSolutions);
    } else {
      reject("Unable to find requested solutions");
    }
  });
}

module.exports = {
  initialize,
  getAllSolutions,
  getSolutionById,
  getSolutionsBySector
};
