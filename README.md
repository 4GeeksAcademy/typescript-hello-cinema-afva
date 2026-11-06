# 🎬 Cinema Seat Manager

**Project status:** In development. This document describes the assignment requirements, not features already implemented.

## Description

**Cinema Seat Manager** is an educational project to develop a TypeScript command-line prototype for managing reservations in a cinema with **8 rows and 10 seats per row** (80 seats in total). Staff will be able to check availability, reserve seats, and find two adjacent free seats.

The goal is to practice **two-dimensional arrays, functions, conditionals, and loops in TypeScript**.

## Functional requirements

- Initialize an 8 × 10 `number[][]` matrix, where `0` means available and `1` means occupied.
- Display the room in the console with row and column numbers, using `L` for available and `X` for occupied.
- Reserve a seat by specifying its row and column.
- Validate that the coordinates are within the room and the seat is not already occupied; report whether the reservation succeeds or fails.
- Count and return the numbers of available and occupied seats.
- Find the **first pair of horizontally adjacent available seats in the same row**, or clearly report that none exists.
- Display understandable messages for each operation.

## Test scenarios

1. **Empty room:** all seats available.
2. **Partially occupied room:** a mixture of available and occupied seats.
3. **Nearly full room:** only isolated available seats remain, with no adjacent pairs.
4. **Full room:** no available seats remain.

Out-of-range coordinates and attempts to reserve an occupied seat will also be checked.

## Technologies and constraints

- **TypeScript** for the console application.
- A **two-dimensional array** as the sole representation of seat states.
- **Functions, conditionals, and loops** for the logic.
- **Do not use objects or classes** in the assignment implementation. The brief permits JSON if additional metadata is needed.
- A web interface using HTML and Tailwind is an **optional challenge**, not an assessment requirement.

## Getting started

The assignment recommends using the [4Geeks Academy TypeScript template](https://github.com/4GeeksAcademy/typescript-hello), either in Codespaces or locally.

```bash
git clone https://github.com/4GeeksAcademy/typescript-hello.git cinema-seat-manager
cd cinema-seat-manager
npm install
```

Create your own GitHub repository and update the remote:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

To run the project, check the scripts available in the template's `package.json`. The exact command may depend on the template version.

## Evaluation criteria

- Correct use of a two-dimensional array.
- Functions with appropriate parameters and return values.
- Validation using `if` and `else`.
- Traversal using loops.
- Correct identification of two horizontally adjacent available seats.
- Readable code, clear names, and comments explaining each function.
- Error-free execution and useful console messages.

## Progress checklist

- [ ] Initialize the seating matrix.
- [ ] Display the seating map.
- [ ] Implement reservations and validation.
- [ ] Count available and occupied seats.
- [ ] Find two adjacent seats.
- [ ] Test all four scenarios.
- [ ] Document functions and verify output.
- [ ] Push the code to a public repository.

## Submission

Push the final code to a **public GitHub repository** and submit its link according to your instructor's instructions.

---

*Learning project based on the 4Geeks Academy “Cinema Seat Manager” assignment.*
