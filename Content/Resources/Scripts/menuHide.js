	$(document).ready(function(){
			$(".menu").on("loaded", function () { 
			var selectedItems = $("a.selected").closest(".is-accordian-submenu-parent")
			$(".sidenav > .tree-node").not(selectedItems).hide()
			});
			});