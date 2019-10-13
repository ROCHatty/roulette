var balance = 10000;
$('#balance').text("Balance: $"+balance)

var $inner = $('.inner'),
	$spin = $('#spin'),
	$reset = $('#reset'),
	timer = 10000;

var red = [32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3];

$reset.hide();

function getrandomnumber(min, max) {
	return Math.random() * (max - min) + min;
}

function bet(bet, item) {
	var betamount = document.getElementById('betamount').value;
	var showbal = balance - betamount;
	$('#balance').text("Balance: $"+showbal)
	if ($(document.getElementById('spin')).is(":hidden")) {
		item.classList.remove('selected');
	} else {
		var  randomNumber = Math.floor(Math.random() * 36), color = null;
		$inner.attr('data-spinto', randomNumber).find('li:nth-child('+ randomNumber +') input').prop('checked','checked');
		$(this).hide();
		$reset.addClass('disabled').prop('disabled','disabled').show();
		$('.placeholder').remove();
		  
		setTimeout(function() {
			$reset.removeClass('disabled').prop('disabled','');
			if($.inArray(randomNumber, red) !== -1){ color = 'red'} else { color = 'black'};
			if(randomNumber == 0){color = 'green'};
			$inner.addClass('rest');
			$thisResult = '<li class="previous-result color-'+ color +'"><span class="previous-number">'+ randomNumber +'</span><span class="previous-color">'+ color +'</span></li>';
			$('.previous-list').prepend($thisResult);
			
			console.log(balance)
			var win = 0;
			if (randomNumber == bet) {
				balance = balance + (Math.round(betamount*35))
			} else if (bet == "1-2to1") {
				if ([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].includes(randomNumber)) {
					balance = balance + (Math.round(betamount*2))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "2-2to1") {
				if ([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(randomNumber)) {
					balance = balance + (Math.round(betamount*2))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "3-2to1") {
				if ([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].includes(randomNumber)) {
					balance = balance + (Math.round(betamount*2))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "1-12") {
				if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(randomNumber)) {
					balance = balance + (Math.round(betamount*2))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "2-12") {
				if ([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].includes(randomNumber)) {
					balance = balance + (Math.round(betamount*2))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "3-12") {
				if ([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].includes(randomNumber)) {
					balance = balance + (Math.round(betamount*2))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "red") {
				if ("red" == color) {
					balance = balance + Math.round(betamount)
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "black") {
				if ("black" == color) {
					balance = balance + Math.round(betamount)
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "1-18") {
				if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].includes(randomNumber)) {
					balance = balance + (Math.round(betamount))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "19-36") {
				if ([19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].includes(randomNumber)) {
					balance = balance + (Math.round(betamount))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "even") {
				if ([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36].includes(randomNumber)) {
					balance = balance + (Math.round(betamount))
				} else {
					balance = balance - (Math.round(betamount))
				}
			} else if (bet == "odd") {
				if ([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35].includes(randomNumber)) {
					balance = balance + (Math.round(betamount))
				} else {
					balance = balance - (Math.round(betamount))
				}
			}
			$('#balance').text("Balance: $"+balance)
		}, timer);
	}
}

$reset.on('click',function(){
	$inner.attr('data-spinto','').removeClass('rest');
	$(this).hide();
	$spin.show();
	var elements = document.getElementsByClassName("selected");
	for (var i=0; i<elements.length; i++) {
		elements[i].classList.remove("selected");
	}
});
