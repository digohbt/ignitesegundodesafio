import { Button } from '../components/Button';


import '../styles/sidebar.scss';

interface GenreProps {
  id:number,
  title:string,
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
  
}

export function SideBar({...props}) {

  
  return (
    <nav className="sidebar">
     
    <span>Watch<p>Me</p></span>
  
    <div className="buttons-container">
    {props.sidebar.genres.map((genre : GenreProps , ) => {
       return(

         <Button
           
           id={String(genre.id)}
           title={genre.title}
           iconName={genre.name}
           onClick={() => props.sidebar.handleClickButton(genre.id)}
           selected={props.sidebar.selectedGenreId === genre.id}
         />
       )
       
        
      
    } )}
      
    </div>
  
  </nav>
  )
 
}