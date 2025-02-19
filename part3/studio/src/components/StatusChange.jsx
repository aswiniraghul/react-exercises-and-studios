import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNotes] = useState("");

   const [recipeStatus, setStatus] = useState(false);


   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {

      event.preventDefault();
      let inputBox = document.querySelector('input[type="text"]').value = '';
      setStatus(true)
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         {notes ? <p>{notes}</p> : "I don't have any notes!"}

         {recipeStatus ? <p>It was delicious!</p> : <p>I have not tried this recipe!</p>}

{/* 
         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p> */}
      </div>
   );
}
