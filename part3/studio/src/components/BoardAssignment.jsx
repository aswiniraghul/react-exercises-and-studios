import { useState } from 'react';

export default function BoardAssignment () {
   //const boards = [];


   let favoriteRecipes = {
      label: "Favorite Recipes",
      value: "favoriteValue"
   }
   let sugaryDesserts = {
      label: "Sugary Desserts",
      value: "sugaryValue"
   }
   let CaBoom = {
      label: "CaBoom!",
      value: "caBoomValue"
   }

   const boards = [favoriteRecipes, sugaryDesserts, CaBoom];

   const [boardName, setName] = useState('no boards yet');


   const handleChange = (event) => {

      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map((board, id) => {
            return(
               <option key={id}>{board.label}</option>
            );
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
