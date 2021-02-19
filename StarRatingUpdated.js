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