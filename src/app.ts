// 1. Initialize the cinema with 8 rows and 10 seats per row
export function initializeCinema(): number[][] {
    const cinema: number[][] = [];

    for (let i = 0; i < 8; i++) {
        const row: number[] = [];

        for (let j = 0; j < 10; j++) {
            row.push(0);
        }

        cinema.push(row);
    }

    return cinema;
}


// 2. Display the cinema seating matrix

export function displayCinema(cinema: number[][]): void {

    console.log("\n  CINEMA SEATING PLAN");
    console.log("  X = Occupied | L = Available\n");

    // Print column numbers with consistent spacing
    let header = "Row |";

    for (let col = 0; col < cinema[0].length; col++) {
        header += String(col + 1).padStart(3, " ");
    }

    console.log(header);
    console.log("-".repeat(header.length));

    // Print each row with aligned seat positions
    for (let i = 0; i < cinema.length; i++) {

        let row = String(i + 1).padStart(3, " ") + " |";

        for (let j = 0; j < cinema[i].length; j++) {
            const seat = cinema[i][j] === 1 ? "X" : "L";
            row += seat.padStart(3, " ");
        }

        console.log(row);
    }
}




export function reserveSeat(
    cinema: number[][],
    row: number,
    col: number
): string {

    const totalRows = cinema.length;
    const totalCols = cinema[0].length;

    // Find the closest available seat
    let closestRow = -1;
    let closestCol = -1;
    let minDistance = Infinity;

    for (let i = 0; i < totalRows; i++) {
        for (let j = 0; j < cinema[i].length; j++) {

            if (cinema[i][j] === 0) {
                const distance =
                    Math.abs(i - (row - 1)) * totalCols +
                    Math.abs(j - (col - 1));

                if (distance < minDistance) {
                    minDistance = distance;
                    closestRow = i + 1;
                    closestCol = j + 1;
                }
            }
        }
    }

    const suggestion = closestRow !== -1
        ? `Closest available option: Row ${closestRow}, Column ${closestCol}.`
        : "No available seats in the cinema.";

    // Validate row and column
    if (!Number.isInteger(row) || !Number.isInteger(col) ||
        row < 1 || row > totalRows ||
        col < 1 || col > totalCols) {

        return `Invalid seat: Row ${row}, Column ${col}.
The cinema has ${totalRows} rows and ${totalCols} columns.
Valid rows: 1 to ${totalRows}.
Valid columns: 1 to ${totalCols}.
${suggestion}`;
    }

    // Check whether the seat is already occupied
    if (cinema[row - 1][col - 1] === 1) {
        return `Seat ${row}-${col} is already occupied.
${suggestion}`;
    }

    // Reserve the requested seat
    cinema[row - 1][col - 1] = 1;

    return `Seat ${row}-${col} reserved successfully.`;
}



export function countSeats(cinema: number[][]): {
    occupied: number;
    available: number;
} {
    let occupied = 0;
    let available = 0;

    for (let i = 0; i < cinema.length; i++) {
        for (let j = 0; j < cinema[i].length; j++) {

            if (cinema[i][j] === 1) {
                occupied++;
            } else {
                available++;
            }
        }
    }

    return { occupied, available };
}



export function findAdjacentSeats(cinema: number[][]): string {

    for (let i = 0; i < cinema.length; i++) {

        for (let j = 0; j < cinema[i].length - 1; j++) {

            if (cinema[i][j] === 0 && cinema[i][j + 1] === 0) {
                return `Two free seats found: Row ${i + 1}, Columns ${j + 1} and ${j + 2}`;
            }
        }
    }

    return "No adjacent free seats available.";
}



