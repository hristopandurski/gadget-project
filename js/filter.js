$(document).ready(function(){
	var filter1 = document.getElementById('filter1'),
		filter2 = document.getElementById('filter2'),
		filter3 = document.getElementById('filter3'),
		wearables = document.getElementsByClassName('wearables'),
		nonWearables = document.getElementsByClassName('non-wear');
	$(filter1).click(function(){
		$(nonWearables).show('slow');
		$(wearables).show('slow');
	});
	$(filter2).click(function(){
		$(nonWearables).hide('slow');
		$(wearables).show('slow');
	});
	$(filter3).click(function(){
		$(nonWearables).show('slow');
		$(wearables).hide('slow');
	});
});