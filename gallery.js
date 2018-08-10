//chamar função no app, na função da barra de xp
$( document ).ready(gallery());

function gallery(){
  fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=S&orderBy=-modified&ts=1&apikey=ca5c7c03b43ce92350960674d66548c2&hash=39840f36a0737bc4bf9e9c1b737d67b1")
  .then((response) => response.json())
  .then(function(marvel) {
    
    // variável que pega a atribuição que precisamos colocar no app
    var marvelAttributiom = marvel.attributionText;
    
    //  variável que pega o objeto data, dentro do JSON, local onde estão
    // as informações dos personagens;
    var dataMarvel = marvel.data;
    
    // each para percorrer o objeto data 
    // e retornar o array results, onde tem as informações das personagens;  
    $(dataMarvel).each(function(){
      // variável que pega o array "result", onde contém os objetos 
      // de cada personagem
      var results = dataMarvel.results; 
      // dentro do results, variável do objeto de cada personagem
      var spiderMan = results[1];
      var storm = results[2];
      var starLord = results[7];
      var scarletWitch = results[10];
      console.log(spiderMan);
       //EACH(s) para percorrer cada objeto das personagens
      // Homen Aranha
  $(spiderMan).each(function(){
    var ThumbSpiderMan = spiderMan.thumbnail;
    // each para percorrer o objeto "thumbnail"
    $(ThumbSpiderMan).each(function(){
      var spiderImg = ThumbSpiderMan.path + ".jpg";
      $(".img2").append($("<img>").attr("src", spiderImg));
    })
    var spiderName = spiderMan.name;
    var spiderDescription = spiderMan.description;  
  });
    
  // // Tempestade
  $(storm).each(function(){
    var ThumbStorm = storm.thumbnail;
    // each para percorrer o objeto "thumbnail"
    $(ThumbStorm).each(function(){
      var stormImg = ThumbStorm.path + ".jpg";
      $(".img3").append($("<img>").attr("src", stormImg));
    })
    var stormName = storm.name;
    var stormDescription = storm.description;
  });
    
  // Star Lord
  $(starLord).each(function(){
    var ThumbStarLord = starLord.thumbnail;
    // each para percorrer o objeto "thumbnail"
    $(ThumbStarLord).each(function(){
      var starLordImg = ThumbStarLord.path + ".jpg";
      $(".img1").append($("<img>").attr("src", starLordImg));
    })
    var starLordName = starLord.name;
    var starLordDescription = starLord.description;
  });
    
  // Feiticeira Escarlate
  $(scarletWitch).each(function(){
    var ThumbScarletWitch = scarletWitch.thumbnail;
    // each para percorrer o objeto "thumbnail"
    $(ThumbScarletWitch).each(function(){
      var scarletWitchImg = ThumbScarletWitch.path + ".jpg";
      $(".img4").append($("<img>").attr("src", scarletWitchImg));
    })
     var scarletWitchName = scarletWitch.name;
     var scarletWitchDescription = scarletWitch.description; 
  });
    
    })
  });





  //if pra level 1
  $('.sticker-1').removeClass('visibility');
  //if level 2
  $('.sticker-2').removeClass('visibility');
  //if level 3
  $('.sticker-3').removeClass('visibility');
  //if level 4
  $('.sticker-4').removeClass('visibility');
}