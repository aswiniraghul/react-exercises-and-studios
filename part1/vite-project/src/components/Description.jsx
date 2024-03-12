import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor =()=> {
    let authorLink ='https://www.onceuponachef.com/';
    let authorPhoto ="https://www.onceuponachef.com/images/2019/04/jenn-segal@2x.jpg";
    let authorName ="JENN SEGAL";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "JENN SEGAL"
           className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>ONCE UPON A CHEF</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
               <h1>"Classic Icebox Cake"</h1>
               <p>"Discover (or rediscover!) the magic of the classic icebox cake: a fancy-looking but utterly simple no-bake dessert."</p>
            </div>
            <RecipeAuthor />
         </div>
        );
    } 
}

export default RecipeDescription;