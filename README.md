# star_rating

**Puzzle:** Create a javascript function that will *console.log()* a text representation of a star rating based on full, half , or empty stars.

Take the star rating and the total number of stars as arguments. 

You will need to take the rating and round to the nearest half star.

for example 3.6/5 would equal (full, full, full, half, empty)

or 1.1/4 would equal (full, empty, empty, empty)

<pre>
function StarRating(str, totalStars) {

    // Round the to the nearest .5
    let r = Math.round(str * 2) / 2;
    // Truncate the .5 off the rating
    let t = Math.trunc(r);
    // Create the array that will hold our rating strings
    let ratingArray = [];
    
    // Make sure the rating doesn't excede the total number of stars possible
    if (str <= totalStars) {
        // Loop to build our array of rating strings
        for (i = 1; i <= totalStars; i++) {
            if (i - .5 == r || i == (t + 1) && r % 1 != 0) {
                ratingArray.push("Half");
            } else if (t >= i) {
                ratingArray.push("Full");
            } else {
                ratingArray.push("Empty");
            }
        }
        //Output our array as a string
        str = ratingArray.join(" ");
        return str;
    } else {
        console.log("Opps, your rating excedes the possible number of stars")
    }
}

// Call the function with values for the rating(str) 
// and the total number of stars(totalStars)
console.log(StarRating(7.4, 10));
</pre>
