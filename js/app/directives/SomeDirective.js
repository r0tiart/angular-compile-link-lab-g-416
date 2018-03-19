function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function(){

			return{
				pre: function(scope,element,attrs){
					element[0].innerText = "another text"
				},
				post: function(scope, element, attrs){
					element[0].addEventListener('click',function(){
						alert("I've been clicked!")
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);