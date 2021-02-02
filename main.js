$(function() {
	
	var LIST = $('.left');
	var ITEM_TEMPLATE =	$('.left-2.std').html();
	/* function addItem(title) {
		var node = $(ITEM_TEMPLATE);
		var divToAdd = $('<div class = "left-2 std"> <div class = "left-2-1 std"> Помідори </div> <div class = "left-2-2 std"><button data-tooltip = "Tooltip" type="button" class="minus"> - </button><div class = "cur"> 1 </div><button data-tooltip = "Tooltip" type="button" class="plus"> + </button></div><div class = "left-2-3 std"><button data-tooltip = "Tooltip" type="button" class="cross"> x </button><button data-tooltip = "Tooltip" type="button" class="bought"> Куплено </button></div> </div>');
		divToAdd.append(node);
		divToAdd.find(".left-2-1").text(title);
		node.find(".cross").click(function(){
		divToAdd.remove();
		});
		LIST.append(divToAdd);
	} */
	
	function addItem(title) {
		var isBought = false;
		
		var divToAdd = $('<div class = "left-2 std"> <div class = "left-2-1 std"> <span class = "product"> Помідори </span> </div> <div class = "left-2-2 std"><button data-tooltip = "Tooltip" type="button" class="minus"> - </button><div class = "cur"> 1 </div><button data-tooltip = "Tooltip" type="button" class="plus"> + </button></div><div class = "left-2-3 std"><button data-tooltip = "Tooltip" type="button" class="cross"> x </button><button data-tooltip = "Tooltip" type="button" class="bought"> Куплено </button></div> </div>');
		divToAdd.find(".product").text(title);
		LIST.append(divToAdd);
		
		var spanToAdd = $('<span class = "items"> <span class = "item"> Помідори </span> <span class = "num-items"> 1 </span> </span>');
		spanToAdd.find(".item").text(title);
		
		$(document).on('keyup', '.left-2-1', function(){
			var txt = divToAdd.find(".left-2-1.std").find(".temp-input").val();
			spanToAdd.find(".item").text(txt);
			spanBought.find(".item").text(txt);
		});
		
		var spanBought = $('<span class = "items"> <span class = "item"> Помідори </span> <span class = "num-items"> 1 </span> </span>');
		spanBought.find(".item").text(title);
		spanBought.find(".item").css("text-decoration", "line-through");
		spanBought.find(".num-items").css("text-decoration", "line-through");
		spanBought.hide();
		$(".right-4").append(spanBought);
		
		divToAdd.find(".cross").click(function(){
			divToAdd.remove();
			spanToAdd.remove();
		});
		
		divToAdd.find(".bought").click(function(){
			if (!isBought) {
				isBought = true;
				divToAdd.find(".product").css("text-decoration", "line-through");
				divToAdd.find(".plus").css("visibility", "hidden");
				divToAdd.find(".minus").css("visibility", "hidden");
				divToAdd.find(".cross").css("display", "none");
				divToAdd.find(".bought").text("Не куплено");
				spanBought.show();
				spanToAdd.hide();
			}
			else {
				isBought = false;
				divToAdd.find(".product").css("text-decoration", "auto");
				divToAdd.find(".plus").css("visibility", "visible");
				divToAdd.find(".minus").css("visibility", "visible");
				divToAdd.find(".cross").css("display", "block");
				divToAdd.find(".bought").text("Куплено");
				spanBought.hide();
				spanToAdd.show();
			}
		});
		
		divToAdd.find(".plus").click(function(){
			var number = parseInt(divToAdd.find(".cur").text(), 10) + 1;
			divToAdd.find(".cur").text(number);
			spanToAdd.find(".num-items").text(number);
			spanBought.find(".num-items").text(number);
			if (number == 2) {
				divToAdd.find(".minus").css("opacity", 1);
			}
		});
		
		divToAdd.find(".minus").click(function(){
			var number = parseInt(divToAdd.find(".cur").text(), 10) - 1;
			if (number > 0) {
				divToAdd.find(".cur").text(number);
				spanToAdd.find(".num-items").text(number);
				spanBought.find(".num-items").text(number);
				if (number == 1) {
					divToAdd.find(".minus").css("opacity", 0.5);
				}
			}
		});
		
		divToAdd.find(".product").click(function() {
			prodClick();
		});
		
		function prodClick() {
			if (!isBought) {
				var txt = divToAdd.find(".product").text();
				divToAdd.find(".left-2-1.std").html('<input type = "text" name = "temp" value = "value" class = "temp-input">');
				divToAdd.find(".left-2-1.std").find(".temp-input").val(txt);
				divToAdd.find(".left-2-1.std").find(".temp-input").focus();
				divToAdd.find(".left-2-1.std").find(".temp-input").focusout(function() {
					txt = divToAdd.find(".left-2-1.std").find(".temp-input").val();
					divToAdd.find(".left-2-1.std").html('<span class = "product"> Помідори </span>');
					divToAdd.find(".product").text(txt);
					spanToAdd.find(".item").text(txt);
					spanBought.find(".item").text(txt);
					divToAdd.find(".product").click(function() {
						prodClick();
					});
				});
			}
		}
		
		$(".right-2").append(spanToAdd);
	}
	
	/* var ITEM_TEMPLATE_2 =	$('.items').html();
	function addItem2(title) {
		var node = $(ITEM_TEMPLATE_2);
		var spanToAdd = $('<span class = "items"> </span>');
		spanToAdd.append(node);
		spanToAdd.find(".item").text(title);
		$(".right-2").append(spanToAdd);
	} */
	
	addItem("Помідори");
	addItem("Печиво");
	addItem("Сир");
	
	$(".add").click(function() {
		var title = $(".text-class").val();
		if (title != "") {
			addItem(title);
			/* addItem2(title); */
		}
		
		$(".text-class").val("");
		$(".text-class").focus();
	});
	
	$(".text-class").keypress(function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			var title = $(".text-class").val();
			if (title != "") {
				addItem(title);
				/* addItem2(title); */
			}
			
			$(".text-class").val("");
			$(".text-class").focus();
		}
	});
});