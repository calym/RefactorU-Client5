$(document).ready(function() {
    
var authors = []; 
var quotes = [];
var ratings = [];
var authorObj = {};



    $('#submitQuote').click(function() {

	    var author = $('input[name="author"]').val();
	    var quote = $('input[name="quote"]').val();
	    var rating = $('#rating').val();

    	

    	//this is for validation!
	    if (!author || !quote) {
	    	alert("Please fill out the form!");
	    	return false;
	    }
		
		$('.prependThis').prepend("<br>Author: " + author); 

		if (!authorObj[author]) {
			authorObj[author]= {};
		}

		authorObj[author][quote] = rating
		
		console.log(authorObj);


		$('.prependThis').prepend("<br>Rating: " + rating); 
		ratings.push(rating);
		console.log(ratings);

		
		$('.prependThis').prepend("<br><br>Quote: " + quote); 
		quotes.push(quote);
		console.log(quotes);
		
		//print a random quote
		console.log(quotes.length);
		quotes[Math.floor(Math.random() * quotes.length)];

		//clears the fields after submit is pushed

		$('input[name="quote"]').val("");
		$('input[name="author"]').val("");
		return false;

		


	// var rating = $('input[name="author"]').val(); make this a radio button?
	// 	$('.quoteBox').append("\nAuthor: " + author);
	// 	console.log(author);
	// 	authors.push(author);
	// 	console.log(authors);
	// 	return false;	
    });


	// prints a list of all the quotes.
	 $('#quotebutton').click(function() {

	    for (var x in authorObj) {
			$('.list').append("<p>Author List: " + x );
			for(var y in authorObj[x]) {
				$('.list').append(y + " ");
			}
		}
	});


		


}); //closes the document



//Problem: All of the quoteObj are being attached to all the author keys.
//We need quote key/v pairs to be added to the right author.

// var authorObj = {  
//     "Mark Twain": {
//         "pithy saying":5, 
//         "other pithy thing":4,
//         "Yeah, buddy":3
//     },  
//      "author2":{
//         "quote":2,
//         "quote2":3
//      }
//     };

// Our main object is authorObject.
// The key is var author
// The value is our inner object. Let's call it quoteObject.
// quoteObj has a key of var quote and value of rating

// // NOT USING THIS DATA MODEL:    
// // var EntriesArray = [ 
// //     {"Mark Twain":[
// //         {"pithy saying":5}, 
// //         {"other pithy thing":4},
// //         {"Yeah, buddy":3} 
// //         ]
// //     },
// //     {"author2":[
// //         {"quote":2},
// //         {"quote2":3}
// //         ]
// //     }
// // ];



