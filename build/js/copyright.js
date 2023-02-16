"use strict";
// const year = document.getElementById("year")!;
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
// year?.setAttribute("datetime", thisYear as unknown as string);
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
