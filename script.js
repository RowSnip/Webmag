function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 


      let  titrePrin = data.journal.articlePrincipal.titre;
      let datePrin = data.journal.articlePrincipal.date;
      let themePrin = data.journal.articlePrincipal.theme;
      let imagePrin = data.journal.articlePrincipal.image;
      let art = document.getElementById("articles")
      let journal = document.getElementById("artPrin")
      let auteurContainer = document.getElementById("auteur")
      let themeContaineur = document.getElementById("theme")
      console.log(journal);

      let artCardPrin = `
      <li class="artCardPrin">
        <img class="imagePrin" src="${imagePrin}">
        <h2 class="titrePrin">'${titrePrin}'</h2>
        <h3 class="themeDate">'${themePrin} - ${datePrin}'</h3>
        <a class="button" href="">Lire L'article</a>
      </li>`;
      journal.insertAdjacentHTML("beforeend", artCardPrin);
      


      data.journal.articles.forEach(article => {

        let artTitre = article.titre;
        let artDate = article.date;
        let artTheme = article.theme;
        let artImage = article.image;
        console.log(artTitre);
        console.log(artDate);
        console.log(artTheme);
        console.log(artImage);
        let artCard = `
        <li class="artCard">
          <img class="card-image" src="${artImage}">
          <div class="info">
            <h2 class="card-title">'${artTitre}'</h2>
            <h3 class="themeDate">'${artTheme} - ${artDate}'</h3>
            <a class="button" href="">Lire L'article</a>
          </div>
        </li>`;
        art.insertAdjacentHTML("beforeend", artCard);
        });

      data.journal.auteurs.forEach(auteur => {

        let prenom = auteur.prenom;
        let experience = auteur.typeExperience;
        let presentation = auteur.presentation;
        let photo = auteur.photo;
        let auteurCard = `
        <li class="Auteur">
          <img class="photo" src="${photo}">
          <div class="cardAuteur">
            <h2 class="prenom">'${prenom}'</h2>
            <h2 class="experience">'${experience}'</h2>
            <h3 class="presentation>'${presentation}'
          </div>
        </li>`;
          auteurContainer.insertAdjacentHTML("beforeend", auteurCard);
          });;
      data.journal.themes.forEach(theme => {

        let themeTitre = theme.nom;
        let themeDescription = theme.description;
        let themeCard = `
        <li class="theme">
          <h2 class="themeTitre">'${themeTitre}'</h2>
          <h2 class="themeDescription">'${themeDescription}'</h2>
        </li>`;
          themeContaineur.insertAdjacentHTML("beforeend", themeCard);
          });
      
      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici