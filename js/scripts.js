$('.photo-list-item').on('click', function() {
	// pull out the photo url from the element's attributes
	var cityPhotoUrl = $(this).attr('cityphoto')
  // log the photo to the console
  console.log(cityPhotoUrl)

  $('#photo-display').empty()

  $('#photo-display').css('background-image', `url(${cityPhotoUrl})`)
 })
