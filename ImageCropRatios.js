(function($) {

	// Get parameter from URL
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
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

		// Get aspect ratios from PW config
		var parent_config = window.parent.ProcessWire.config;
		var image_field_name = getUrlParameter('field');
		var ratios = parent_config['icr_ratios_' + image_field_name];

		// Add select element
		var $el = $('<label>' + parent_config.icr_label + ':&nbsp;</label>');
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
