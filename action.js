// Boolzapp - a (not very) innovative messaging platform
// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde
// Milestone 2
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 3
// Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

function mandaMsg(){
console.log("mandaMsg");

var inputVal = $("#sendText").val();

var msgElement = $("#template .message").clone();

msgElement.html(inputVal + "<div class='eliminato'><span class='del'>Elimina il messaggio</span></div>");
$(".chat.active").append(msgElement);
$("#sendText").val(" ");

setTimeout(function(){
  var inviaMsg;
  inviaMsg = "<div class='theyMsg'>" + "Va bene" + "<div class='eliminato'><span class='del'>Elimina il messaggio</span></div>" + "</div>";
  $(".chat.active").append(inviaMsg);
}, 1000);
};

function trova(){
  var lettera = $(this).val().toLowerCase();

  console.log(lettera);

  $(".friend").each(function (){
    var contatto = $(this).find("h2").text().toLowerCase();
    console.log(contatto);
    // $(this).show();

    if (!contatto.includes(lettera)){
      $(this).hide();
    } else {
      $(this).show();
    }
  });
};


// Uso gli attributi per selezionare le chat desiderate

$(".friend").click(function(){
  var refchat = $(this).attr("refchat");
  console.log(refchat);
  $(".chat").removeClass("active");
  $(".chat[refchat='"+ refchat +"']").addClass("active");
});




// Provo a creare una funzione per eliminare i messaggi

$("#center").on("click", ".message, .theyMsg", function(){
  $(this).find('.eliminato').toggleClass("active");
});

// Funzione per eliminare i messaggi

//$(".del").click(function(){
$(document).on('click', '.del', function() {
  $(this).parent().parent().remove();
});




$(document).ready(function(){

$("#sendMsg").click(mandaMsg);
$("#seachFriends").keyup(trova);

// Appendo classe eliminato ai messaggi
 $("<div class='eliminato'></div>").appendTo(".messaggio", ".theyMsg");


// $("#center").append("<div class='holder'>" + msgElement + "</div>");



});
