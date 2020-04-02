(function($) {

	// Get parameter from URL
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

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

		var image_field_name = getUrlParameter('field');
		var ratios = (image_field_name === false) ? window.parent.ProcessWire.config.icr_ratios_default : window.parent['icr_ratios_' + image_field_name];

		// Add select element
		var $el = $('<label>' + ProcessWire.config.icr_label + ':&nbsp;</label>');
		var $select = $('<select id="icr_ratio"></select>');
		$.each(ratios, function(index, value) {
			$select.append('<option value="' + index + '">' + value + '</option>');
		});
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
