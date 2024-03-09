export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://www.bing.com/images/blob?bcid=rPAIRylYMsMGw2kL6Gr4VcxXao5r.....2U";
   let book2 = "https://th.bing.com/th/id/OIP.vlcxn9h39VQZgof12TjR7AHaLS?w=197&h=300&c=7&r=0&o=5&dpr=1.5&pid=1.7";
   let book3 = "https://m.media-amazon.com/images/I/91xOk9kCZ6L._SL1500_.jpg";

   return (
      <div>
<h3>{pageTitle}</h3>
<img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
<img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
<img src={book3} alt="The London Seance Society by Sarah Penner" />
</div>    
   );
}