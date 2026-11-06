
import {
    initializeCinema,
    displayCinema,
    reserveSeat,
    countSeats,
    findAdjacentSeats
} from "./src/app.ts";

import {
    testEmptyCinema,
    testPartiallyOccupiedCinema,
    testAlmostFullCinema,
    testFullCinema
} from "./src/tests.ts";

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";


// Clear the terminal
console.clear();


// ==========================================
// PART 1: AUTOMATIC TESTS
// ==========================================

// Run the four required scenarios
testEmptyCinema();
console.log("\n");
testPartiallyOccupiedCinema();
console.log("\n");
testAlmostFullCinema();
console.log("\n");
testFullCinema();
console.log("\n");