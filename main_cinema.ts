import { initializeCinema, displayCinema } from "./src/cinema";

// Initialize the cinema
const cinema = initializeCinema();

// Mark two seats as occupied for testing
cinema[0][2] = 1;
cinema[1][4] = 1;

// Display the seating matrix
displayCinema(cinema);