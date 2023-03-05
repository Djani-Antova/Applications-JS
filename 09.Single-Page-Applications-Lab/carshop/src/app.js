 // GAther views in map
 const main = document.querySelector("main");
 const views = {
   home: document.getElementById("home"),
   catalog: document.getElementById("catalog"),
   login: document.getElementById("login"),
 };
 // Remove views from page
 Object.values(views).forEach((v) => v.remove()); //  секциите ги няма в ДОМ-дървото,
 // не само че не се виждат
 // но ги има в променливите по-нагоре

 // Attach starting view
 main.replaceChildren(views.home);

 document.getElementById("home-link").addEventListener("click", () => {
   main.replaceChildren(views.home);
 });

 document.getElementById("catalog-link").addEventListener("click", () => {
   main.replaceChildren(views.catalog);
 });

 document.getElementById("login-link").addEventListener("click", () => {
   main.replaceChildren(views.login);
   
 });