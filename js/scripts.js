<script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>

$('.photo-list-item').on('click', function() {
	// pull out the photo url from the element's attributes
	var cityPhotoUrl = $(this).attr('cityphoto')
  // log the photo to the console
  console.log(cityPhotoUrl)

  $('#photo-display').empty()

  $('#photo-display').css('background-image', `url(${cityPhotoUrl})`)
 })
