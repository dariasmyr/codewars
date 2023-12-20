// DESCRIPTION:
// You've been going to the gym for some time now and recently you started taking care of your nutrition as well. You want to gain some weight but who wants to bother counting calories every day. It said somewhere that protein is the foundation of building muscle, so let's try to calculate the total amount of calories and proteins we take in.
//
// Task:
// Given an array of meals where each element is a string in the form '300g turkey, 300g potatoes, 100g cucumber' find out how many proteins and calories you consumed. You like to keep things simple so all values will be expressed in grams. In case you didn't know every gram of protein and carbohydrate has 4 calories, while 1 gram of fat provides 9 calories.
// An object food (in Ruby $food ) is preloaded for you that contains the information about the given food per 100 grams:
// var food = { 
//  chicken: [20, 5, 10], //per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.
// eggs: [10, 5, 15], //protein:10g , carbs:5g , fats: 15g
//  salmon: [27, 0, 10], 
//  beans: [8, 25, 0], 
//  bananas: [1, 23, 0], 
//  ... 
//  ... 
// }
// Round your results to 2 decimal places and return a string in the form "Total proteins: n grams, Total calories: n".
// Delete all trailing zeros on every float and remove trailing point if the result is an integer. Note: No invalid input testing.
//
// Have fun!
//               _....----"""----...._
//             .-'  o    o    o    o   '-.
//            /  o    o    o         o    \
//           /     o      o   o     o    o \
//         _|   o   o    o      o  o     o  |_
//        / `''-----.................-----''` \
//        \___________________________________/
//          \~`-`.__.`-~`._.~`-`~.-~.__.~`-`/
//           \                             /
//           `-._______________________.-'
//            
//            //lonely burger passing by


            

// My Solution
function bulk(meals) {
  var totalProteins = 0;
  var totalCalories = 0;

  meals.forEach(function(meal) {
    var components = meal.split(', ');

    components.forEach(function(component) {
      var [weight, foodItem] = component.split(' ');

      if (food.hasOwnProperty(foodItem)) {
        var [proteinPer100g, carbsPer100g, fatPer100g] = food[foodItem];
        var weightInGrams = parseFloat(weight);

        totalProteins += (proteinPer100g / 100) * weightInGrams;
        totalCalories += ((proteinPer100g + carbsPer100g) * 4 + fatPer100g * 9) / 100 * weightInGrams;
      }
    });
  });

  totalProteins = parseFloat(totalProteins.toFixed(2));
  totalCalories = parseFloat(totalCalories.toFixed(2));

  var resultString = `Total proteins: ${totalProteins} grams, Total calories: ${totalCalories}`;

  return resultString;
}
