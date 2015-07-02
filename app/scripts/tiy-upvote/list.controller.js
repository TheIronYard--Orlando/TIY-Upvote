(function(){
  angular.module('tiy-upvote')
    .controller('ListController', function($http){
      var self = this;
      self.questions = []; //not sure if this is the right way to get things to populate?

      console.log('Hello World!');
    });
})();

// // Variadic
// $('img.product-image').attr('src'); // {String}
// $('img.product-image')
//   .attr('src', MainImage.url_75x75) // {$('img.product-image')}
//   .attr('title', MainImage.caption)
// .html(); // {String}
