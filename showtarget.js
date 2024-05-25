/*********************************
 * Warning! Requires jQuery 3.0+ *
 *********************************/

/**
	Keep fixed Target and ignore mousover/mouseout
	Usage: 
		onclick="showTarget(X,1)"
		onmouseover="showTarget(X)"
		onmouseleave="showTarget(0)
*/

// target id & class
let tgt = 'tgt'; // change tgt to whatever class and id you use i.e. 'box', 'img' or 'map'

function showTarget( tgt_index, fix_tgt ){
	// defaults
	tgt_index = tgt_index || 0;
	fix_tgt = fix_tgt || 0;
	// old fixed target
	let old_fixed_tgt = $( "." + tgt + ".fixed" );
	// hide all targets
	$( "." + tgt ).css( 'display', "none" );
	// show target #x
	if ( $( old_fixed_tgt ).length === 0 ){ 
		$( "#" + tgt + "_" + tgt_index ).css( 'display', "block" );
	}
	// fix target
	if ( fix_tgt === 1 ){
		$( "." + tgt ).removeClass( 'fixed' );
		$( "#" + tgt + "_" + tgt_index ).addClass( 'fixed' );
	}
}
