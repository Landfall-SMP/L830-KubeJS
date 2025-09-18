ItemEvents.modifyTooltips(event => {

	// Only show this text when shift is not pressed
	event.add('brewinandchewin:keg', {shift: false}, Text.gray('Can be piped out of with create pipes,just leave the mug slot empty.'))

})