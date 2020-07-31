$("#currentTime").text(moment().format('MMMM Do YYYY, h:mm a'))
let hourCurrent = moment().hour
let $centerCol = $(".centerCol")

currentTime()
function currentTime() {
    
    let valueTime = $(".col-md-10");


    valueTime.value

    

   for (let i = 0; i < $centerCol.length; i++) {
       const loopingTime = $centerCol[i];

       if ($(".centerCol")[i].getAttribute("value")===hourCurrent) {
           $(".row").addClass("present")
       } 
       else if ($(".centerCol")[i].getAttribute("value")>hourCurrent){
           $(".row").addClass("future")
       }
       else if ($(".centerCol")[i].getAttribute("value")<hourCurrent) {
           $(".row").addClass("past")
       }   
   }
}

function insertNote  () {

    $("#centerCol").empty();

    for (var i = 0; i < notes.length; i++) {
      var a = $("<button>");
      a.addClass("");
      a.attr("data-name", notes[i]);
      a.text(notes[i]);
      $("#centerCol").append(a);
    }
  }

  $("#add-note").on("click", function(event) {
    event.preventDefault();
    var note = $("#note-input").val().trim();
    notes.push(note);
    insertNote ();
  });

  insertNote ();
  

//   saveBtn.addEventListener("click", function() {
//   note-input.textContent = note;
//   localStorage.setItem("note", note);}
