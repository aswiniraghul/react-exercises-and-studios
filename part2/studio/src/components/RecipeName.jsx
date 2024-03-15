import recipedata from "./recipe.json";

function RecipeName() {

  
  let recipeName = recipedata.map(recipe => {
    return recipe.name;
  });

  return (
    <div>
      <h1>{recipeName}</h1>
    </div>
  );
}
// function RecipeName() {
//   const recipeName = (
//     <h1 key = {recipedata[0].name>{recipedata[0].name}</h1>}
//   );
//   return recipeName;
// }
export default RecipeName;

//import return the name of the recipe as a level 1 header