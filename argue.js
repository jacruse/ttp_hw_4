var left = document.getElementById( 'left' ),
    right = document.getElementById( 'right' ),
    dork_one,
    dork_two;

dork_one = function() {
    var para = document.getElementById( 'p' ),
	new_text = document.createTextNode( "I'm right" );

    para.removeChild(para.childNodes[0]);
    para.appendChild(new_text);  
}

dork_two = function() {
    var para = document.getElementById( 'p' ),
	new_text = document.createTextNode( "No, I'm right" );

    para.removeChild(para.childNodes[0]);
    para.appendChild(new_text);    
}


left.addEventListener( 'mousedown', dork_one );
right.addEventListener( 'mousedown', dork_two );
