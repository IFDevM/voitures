$(document).ready((e) => {
  let list, i

  list = $("ul");

  $('#charger').on('click', () => { /*Event jQuery and callback json */

    $.getJSON('js/data.json', (data) => {
      for (i = 0; i < data.voitures.length; i++) {

        list.append(`<li>Marque : ${data.voitures[i].marque}</li>`);
        list.append(`<li>Année : ${data.voitures[i].annee}</li>`);
        list.append(`<li>Type : ${data.voitures[i].type}</li>`);
        list.append(`<li>Etat : ${data.voitures[i].etat}</li>`);
        list.append(`<li>Description : ${data.voitures[i].description}</li>`);
        list.append(`<li><img src="${data.voitures[i].image}" alt="${data.voitures[i].marque}"></li>`);
        console.log(JSON.stringify(data.voitures[i].marque))
      }



    });

    $('#charger').attr('disabled', 'true').css(
      {
        background: "#ccc",
        color: "#222"
      }
    )
    $('#charger').text("Evenement désactivé")

  });

});