document.addEventListener('DOMContentLoaded', function(e) {

  $(document).ready(function () {
                  var images = ["./img/WIECZNECIENIE1.png", "./img/WIECZNECIENIE4.png", "./img/body3.png", "./img/ELDO2.png" ];
                  var index = -1;

                  window.setInterval(function () {
                      index = (index + 1 < images.length) ? index + 1 : 0;
                      $('body').css("background-image", "url('" + images[index] + "')");
                  }, 3000);
              });



});
