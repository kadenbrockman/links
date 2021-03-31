
var card = document.getElementById('cardz');
document.getElementById('cardz').addEventListener('click', function() {
  card.classList.toggle('flipped');
}, true);
document.getElementById('flip').addEventListener('click', function() {
    card.classList.toggle('flipped');
}, true);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
    $(window).on('load resize',function(){
        if($(window).width() > 950){
            window.location = "desktop.html"
        }
    });
    