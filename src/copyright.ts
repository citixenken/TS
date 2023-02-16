// const year = document.getElementById("year")!;
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
// year?.setAttribute("datetime", thisYear as unknown as string);
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
