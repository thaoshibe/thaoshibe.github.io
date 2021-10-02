function toggleblock(blockId)
{
    var block = document.getElementById(blockId);
    if (block.style.display == 'none') {
	block.style.display = 'block' ;
    } else {
	block.style.display = 'none' ;
    }
}

$( document ).ready(function() {
    $( ".blockId" ).click(function() {

        $('.blockId').toggle();
        $(this).toggleClass('open'); 
    });

});

