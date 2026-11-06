
import {
    initializeCinema,
    displayCinema,
    reserveSeat,
    countSeats,
    findAdjacentSeats
} from "./app.ts";


// ==========================================
// FORMATTING FUNCTIONS
// ==========================================

// Print a descriptive heading for each test
function printTestHeader(number: number, title: string): void {
    console.log("\n" + "=".repeat(55));
    console.log(` TEST ${number}: ${title}`);
    console.log("=".repeat(55));
}


// Print every line with consistent indentation
function printMessage(message: string): void {
    const lines = message.split("\n");

    for (const line of lines) {
        console.log("  " + line);
    }
}


// Display the cinema and summarize its current state
function printCinemaResults(cinema: number[][]): void {

    displayCinema(cinema);

    const result = countSeats(cinema);

    console.log("\n  SEAT AVAILABILITY");
    console.log("  " + "-".repeat(30));
    console.log(`  Occupied seats  : ${result.occupied}`);
    console.log(`  Available seats : ${result.available}`);
    console.log(`  Total capacity  : ${result.occupied + result.available}`);

    console.log("\n  ADJACENT SEAT SEARCH");
    console.log("  " + "-".repeat(30));

    printMessage(findAdjacentSeats(cinema));
}


// ==========================================
// TEST 1: EMPTY CINEMA
// ==========================================

// Verify that all 80 seats are available
export function testEmptyCinema(): void {

    printTestHeader(1, "EMPTY CINEMA");

    const cinema = initializeCinema();

    console.log("\n  Scenario: All seats are initially available.");

    printCinemaResults(cinema);
}


// ==========================================
// TEST 2: PARTIALLY OCCUPIED CINEMA
// ==========================================

// Verify reservations, duplicate bookings and invalid positions
export function testPartiallyOccupiedCinema(): void {

    printTestHeader(2, "PARTIALLY OCCUPIED CINEMA");

    const cinema = initializeCinema();

    console.log("\n  Scenario: Reserve three seats and validate errors.");

    console.log("\n  RESERVATION TESTS");
    console.log("  " + "-".repeat(30));

    printMessage(reserveSeat(cinema, 1, 3));
    printMessage(reserveSeat(cinema, 2, 5));
    printMessage(reserveSeat(cinema, 3, 7));

    console.log("\n  DUPLICATE RESERVATION");
    console.log("  " + "-".repeat(30));

    printMessage(reserveSeat(cinema, 1, 3));

    console.log("\n  INVALID POSITION");
    console.log("  " + "-".repeat(30));

    printMessage(reserveSeat(cinema, 9, 2));

    printCinemaResults(cinema);
}


// ==========================================
// TEST 3: ALMOST FULL CINEMA
// ==========================================

// Verify that isolated free seats are not treated as adjacent
export function testAlmostFullCinema(): void {

    printTestHeader(3, "ALMOST FULL CINEMA");

    const cinema = initializeCinema();

    // Occupy all seats
    for (let i = 0; i < cinema.length; i++) {
        for (let j = 0; j < cinema[i].length; j++) {
            cinema[i][j] = 1;
        }
    }

    // Leave three isolated seats available
    cinema[0][0] = 0;
    cinema[3][4] = 0;
    cinema[7][9] = 0;

    console.log("\n  Scenario: Only three isolated seats remain available.");

    printCinemaResults(cinema);
}


// ==========================================
// TEST 4: COMPLETELY FULL CINEMA
// ==========================================

// Verify that no seats are available and reservations fail
export function testFullCinema(): void {

    printTestHeader(4, "COMPLETELY FULL CINEMA");

    const cinema = initializeCinema();

    // Occupy all seats
    for (let i = 0; i < cinema.length; i++) {
        for (let j = 0; j < cinema[i].length; j++) {
            cinema[i][j] = 1;
        }
    }

    console.log("\n  Scenario: All 80 seats are occupied.");

    printCinemaResults(cinema);

    console.log("\n  RESERVATION ATTEMPT");
    console.log("  " + "-".repeat(30));

    printMessage(reserveSeat(cinema, 2, 5));
}
