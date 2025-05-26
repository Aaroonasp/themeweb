document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("imageModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    // Get all popup trigger buttons
    var triggers = document.getElementsByClassName("popup-trigger");

    // Loop through all trigger buttons and add event listener
    for (let i = 0; i < triggers.length; i++) {
        triggers[i].onclick = function() {
            modal.style.display = "block";
            // Get the image sibling of the button
            var thumbImage = this.previousElementSibling;
            var largeSrc = thumbImage.getAttribute('data-large-src');
            modalImg.src = largeSrc ? largeSrc : thumbImage.src; // Fallback to thumb src if no large src
            captionText.innerHTML = thumbImage.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-button")[0];

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal content (but on the modal background), close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
