//CUSTOM DIRECTIVES: camelCase directive name changes to camel-case directive expressive HTML
app.directive('productTitle', function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		//template: '<h3> stuff </h3>' + '<p> some other stuff </p>'
		templateUrl: 'snippets/product-title.html',
	};
});

//with CONTROLLER
app.directive('productPanels', function(){
	return {
		restrict: 'E',
		templateUrl: 'snippets/product-panels.html',
		controller: function(){
			this.tab = 1;

			this.selectTab = function(setTab) {
				this.tab = setTab;
			};

			this.isSelected = function(checkTab) {
				return this.tab === checkTab;
			};
		}
	};
});