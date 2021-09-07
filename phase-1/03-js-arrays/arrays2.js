// SECOND lab w greg

// ## Array Iteration && Nested Objects

   // Objects
     // Object . vs [] operator


  // Iterator Methods
    //forEach
    //map
    //filter
    //find
    //includes
    //reduce

    //****also core methods in RUBY */
  

//forEach

    const nameArray = ['dev', 'em', 'mom', 'dad']

   let forEachReturn = nameArray.forEach((name, i, array) => {
        console.log(name);
        console.log(i);
        console.log(array);
        
        return 'super smash brothers!!!!!'
    })
    // forEach method pulls its own logic
    // iterates through each element in the array
    // its return value is always undefined


//map 


let mapReturn = nameArray.map((name) => {
    //  console.log(name);
    //  console.log(i);
    //  console.log(array);
     
     //return 'super smash brothers!!!!!' => returns ssb
     return `${name}!` // => returns assigned names in the array
})
// returns the declared value for EVERY instance in the array