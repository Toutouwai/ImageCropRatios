(function($) {

	// Set crop aspect ratio
	function setCropAspectRatio() {
		var value = $('#icr_ratio').val();
		if(value !== 'auto') {
			// Remove prefix and get float value
			value = parseFloat(value.substring(1));
		}
		$('#selected_image').cropper('setAspectRatio', value);
	}

	$(document).ready(function() {

		// Get aspect ratios from JS var
		var ratios = ProcessWire.config.icr_ratios;

		// Add select element
		var $el = $('<label>' + ProcessWire.config.icr_label + ':&nbsp;</label>');
		var $select = $('<select id="icr_ratio"></select>');
		if(ratios) {
			$.each(ratios, function(index, value) {
				$select.append('<option value="' + index + '">' + value + '</option>');
			});
		}
		$el.append($select);
		$('#crop_coordinates').append($el);

		// Set crop aspect ratio when crop action selected or dropdown changes
		$('#crop_action').click(function() {
			// Wait a moment for core JS to execute
			setTimeout(setCropAspectRatio, 100);
		});
		$(document).on('change', '#icr_ratio', setCropAspectRatio);

	});

}(jQuery));
