var hoover = document.getElementById( 'aye' ),
    mama_mia;

mama_mia = function() {
    alert("Hey, I told you not to hover over me!");
    console.log("over and out");
}

hoover.addEventListener( 'mouseover', mama_mia );
