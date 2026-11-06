# 🎬 Cinema Seat Manager | Gestor de Asientos de Cine

A TypeScript command-line project for managing seat reservations in a small cinema.  
Proyecto de línea de comandos en TypeScript para gestionar las reservas de asientos de una sala de cine.

> **Project status / Estado:** In development / En desarrollo. This README describes the assignment requirements, not completed features. / Este README describe los requisitos del ejercicio, no funcionalidades ya implementadas.

---

## 🇪🇸 Español

### Descripción

**Cinema Seat Manager** es un proyecto educativo que consiste en desarrollar un prototipo de reservas para una sala de cine de **8 filas y 10 asientos por fila** (80 asientos en total). El personal podrá consultar la disponibilidad, reservar asientos y localizar dos plazas libres contiguas.

El objetivo principal es practicar **matrices bidimensionales, funciones, condicionales y bucles en TypeScript**, sin utilizar objetos ni clases para representar los asientos.

### Requisitos funcionales

- Inicializar una matriz `number[][]` de 8 × 10, con `0` para asientos libres y `1` para ocupados.
- Mostrar la sala por consola, con números de fila y columna, usando `L` (libre) y `X` (ocupado).
- Reservar un asiento a partir de su fila y columna.
- Validar que las coordenadas sean correctas y que el asiento no esté ya reservado.
- Contar los asientos libres y ocupados.
- Encontrar el **primer par de asientos libres consecutivos en la misma fila** e indicar si no existe.
- Mostrar mensajes claros sobre los resultados de cada operación.

### Escenarios de prueba

1. Sala vacía: 80 asientos libres.
2. Sala parcialmente ocupada.
3. Sala casi llena, con asientos libres aislados y sin parejas contiguas.
4. Sala completamente llena: 0 asientos libres.

También conviene comprobar coordenadas fuera de rango y reservas repetidas.

### Tecnologías y restricciones

- **TypeScript** y **Node.js** para ejecutar el prototipo por consola.
- Matriz bidimensional como representación de la sala.
- Funciones, `if`/`else` y bucles (`for`, `while`, etc.).
- **No utilizar objetos ni clases para modelar los asientos.**
- La interfaz web es opcional y no forma parte de la evaluación.

### Cómo empezar

El ejercicio propone partir de la [plantilla TypeScript de 4Geeks Academy](https://github.com/4GeeksAcademy/typescript-hello).

```bash
git clone https://github.com/4GeeksAcademy/typescript-hello.git cinema-seat-manager
cd cinema-seat-manager
npm install
```

Crea tu propio repositorio en GitHub y cambia la URL del remoto:

```bash
git remote set-url origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

**Ejecución:** utiliza los comandos definidos en el `package.json` de la plantilla elegida. No se especifica aquí un comando de inicio porque puede variar según su versión.

### Entrega

Sube el código a un **repositorio público de GitHub** y entrega su enlace según las instrucciones de tu instructor o instructora.

---

## 🇬🇧 English

### Overview

**Cinema Seat Manager** is an educational TypeScript project to build a command-line reservation prototype for a cinema with **8 rows and 10 seats per row** (80 seats in total). Cinema staff should be able to check availability, reserve individual seats, and locate two adjacent free seats.

The main learning objectives are **two-dimensional arrays, functions, conditionals, and loops in TypeScript**, without using objects or classes to represent the seating layout.

### Functional requirements

- Initialize an 8 × 10 `number[][]` matrix, using `0` for available seats and `1` for occupied seats.
- Print the seating layout to the console, including row and column labels, using `L` (available) and `X` (occupied).
- Reserve a seat using its row and column coordinates.
- Validate coordinates and prevent duplicate reservations.
- Count available and occupied seats.
- Find the **first pair of horizontally adjacent available seats in the same row**, or clearly report that no pair exists.
- Print informative messages for successful and unsuccessful operations.

### Test scenarios

1. Empty cinema: all 80 seats available.
2. Partially occupied cinema.
3. Nearly full cinema, with isolated available seats but no adjacent pair.
4. Completely full cinema: no available seats.

Out-of-range coordinates and repeated booking attempts are also useful edge cases to test.

### Technology and constraints

- **TypeScript** and **Node.js** for a command-line prototype.
- A two-dimensional array to represent the seating layout.
- Functions, `if`/`else`, and loops (`for`, `while`, etc.).
- **Do not use objects or classes to model seats.**
- A graphical web interface is optional and is not part of the assessment.

### Getting started

The assignment recommends the [4Geeks Academy TypeScript starter template](https://github.com/4GeeksAcademy/typescript-hello).

```bash
git clone https://github.com/4GeeksAcademy/typescript-hello.git cinema-seat-manager
cd cinema-seat-manager
npm install
```

Create your own GitHub repository and update the remote URL:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

**Running the project:** follow the scripts provided in the chosen starter template's `package.json`. The exact command depends on the template version.

### Submission

Push the completed code to a **public GitHub repository** and submit its URL according to your instructor's directions.

---

## Project checklist / Lista de control

- [ ] Initialize the seating matrix / Inicializar la matriz.
- [ ] Print the seating map / Mostrar el mapa de asientos.
- [ ] Validate and reserve seats / Validar y reservar asientos.
- [ ] Count availability / Contar disponibilidad.
- [ ] Find adjacent seats / Buscar asientos contiguos.
- [ ] Test the four required scenarios / Probar los cuatro escenarios.
- [ ] Push the final code to GitHub / Subir el código final a GitHub.

## Reference / Referencia

Assignment / Enunciado: **Cinema Seat Manager**, 4Geeks Academy. This README is a bilingual project description adapted from the supplied assignment. / Este README es una descripción bilingüe adaptada del enunciado facilitado.
