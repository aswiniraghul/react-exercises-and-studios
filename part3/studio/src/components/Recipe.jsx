import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = 'https://www.onceuponachef.com/';  
   let authorPhoto ="https://www.onceuponachef.com/images/2019/04/jenn-segal@2x.jpg";
   let authorName ="JENN SEGAL";

   return (
      <div>
         <img src={authorPhoto} alt = "JENN SEGAL" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

    

const RecipeIngredients = () => {
   const ingredients = ["Heavy cream","sugar",
   "vanilla extract","25 Oreo Thins","Cocoa powder"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.onceuponachef.com/images/2023/08/icebox-cake-1120x732.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
