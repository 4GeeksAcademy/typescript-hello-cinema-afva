
import {
    initializeCinema,
    reserveSeat,
    countSeats
} from "./app.ts";

// Cinema data: 0 = available, 1 = occupied
let cinema: number[][] = initializeCinema();

const cinemaElement = document.getElementById("cinema")!;
const messageElement = document.getElementById("message")!;
const resetButton = document.getElementById("reset")!;

// Display the cinema seating plan
function renderCinema(): void {

    cinemaElement.innerHTML = "";

    for (let i = 0; i < cinema.length; i++) {

        const rowElement = document.createElement("div");
        rowElement.className = "flex gap-2 items-center";

        const rowLabel = document.createElement("span");
        rowLabel.className = "w-6 text-sm text-gray-500";
        rowLabel.textContent = String(i + 1);

        rowElement.appendChild(rowLabel);

        for (let j = 0; j < cinema[i].length; j++) {

            const seat = document.createElement("button");

            seat.textContent = String(j + 1);
            seat.className =
                "w-9 h-9 rounded text-xs font-semibold transition " +
                (cinema[i][j] === 0
                    ? "bg-green-400 hover:bg-green-500"
                    : "bg-red-400 hover:bg-red-500");

            seat.setAttribute(
                "aria-label",
                `Row ${i + 1}, Seat ${j + 1}, ${cinema[i][j] === 0 ? "available" : "occupied"}`
            );

            seat.addEventListener("click", () => {
                const message = reserveSeat(cinema, i + 1, j + 1);

                messageElement.textContent = message;

                renderCinema();
            });

            rowElement.appendChild(seat);
        }

        cinemaElement.appendChild(rowElement);
    }

    updateCounters();
}

// Update occupied and available seat counts
function updateCounters(): void {

    const [occupied, available] = countSeats(cinema);

    document.getElementById("occupied")!.textContent =
        String(occupied);

    document.getElementById("available")!.textContent =
        String(available);

    document.getElementById("total")!.textContent =
        String(occupied + available);
}

// Reset all reservations
resetButton.addEventListener("click", () => {

    cinema = initializeCinema();

    messageElement.textContent = "All reservations cleared.";

    renderCinema();
});

// Initialize the website
renderCinema();
