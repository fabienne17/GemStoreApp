(function(){
	var app = angular.module('gemStore',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
		{
			name: 'Regular Dodecahedron',
			price: 2.95,
			description: 'some gems have qualities beyond their luster. The dodecahedron is one of those gems',
			images: [
				{
					full:'images/dodecahedron-01.png'
				},
				{
					full:'images/dodecahedron-02.png'
				},
				{
					full:'images/dodecahedron-03.png'
				}
			],
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tim@hater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'time@heater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tom@harder.net'
				}
			]
		},
		{
			name: 'Zonohedron',
			price: 3.95,
			description: 'some gems have qualities beyond their luster. The zonohedron is one of those gems',
			images: [
				{
					full:'images/zonohedron-01.png'
				},
				{
					full:'images/zonohedron-02.png'
				},
				{
					full:'images/zonohedron-03.png'
				}
			],
			canPurchase: false,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tim@hater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'time@heater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tom@harder.net'
				}
			]
		},
		{
			name: 'Hexagonal Prism',
			price: 1.95,
			description: 'some gems have qualities beyond their luster. The hexagonal prism is one of those gems',
			images: [
				{
					full:'images/hexagonal-01.png'
				},
				{
					full:'images/hexagonal-02.png'
				},
				{
					full:'images/hexagonal-03.png'
				}
			],
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tim@hater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'time@heater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tom@harder.net'
				}
			]
		},
		{
			name: 'Stellated Dodecahedron',
			price: 2.55,
			description: 'some gems have qualities beyond their luster. The stellated is one of those gems',
			canPurchase: true,
			images: [
				{
					full:'images/stellated-01.png'
				},
				{
					full:'images/stellated-02.png'
				},
				{
					full:'images/stellated-03.png'
				}
			],
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tim@hater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'time@heater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tom@harder.net'
				}
			]
		},
		{
			name: 'Tricontetrahedron',
			price: 5.95,
			description: 'some gems have qualities beyond their luster. The tricontetrahedron is one of those gems',
			images: [
				{
					full:'images/tricontetrahedron-01.png'
				},
				{
					full:'images/tricontetrahedron-02.png'
				},
				{
					full:'images/tricontetrahedron-03.png'
				}
			],
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tim@hater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'time@heater.net'
				},
				{
					stars: 5,
					body: 'excellent gem',
					author: 'tom@harder.net'
				}
			]
		}
	]
})();