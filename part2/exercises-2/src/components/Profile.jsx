import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h3>Ocean Facts:</h3>
      <u1>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </u1>
      <Button />
   </div>   
);

function Profile()
{
   return(
      <>
         <ul>
            {listItem}
         </ul>  
         <Button />
      </>
   );
}
export default Profile;

// function Profile()
// {
//    return(
//       <>
//          <Button />
//       </>  
//    );
// }

// export default Profile;