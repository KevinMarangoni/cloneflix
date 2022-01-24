import React,{useState} from 'react';
import './movieRow.css';
import navigateBefore from './img/Before.png'
import navigateForward from './img/Forward.png'

export default ({ title, items }) => {
    const[scrollX, setScrollX] = useState(0);

    const handleLeftArrow =()=>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x>0){
            x=0
        }
        setScrollX(x)
    }
    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW > x)){
            x=window.innerWidth - listW - 60
        }
        setScrollX(x)
    }
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
            <img className= "movieRow--left--before" src={navigateBefore} width={20}/>
            </div>
            <div className="movieRow--right"onClick={handleRightArrow}>
                <img className="movieRow--right--forward" src={navigateForward} width={20}/>
            </div>
            <div className="movieRow--listarea" >
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length* 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width={300} alt={item.original_title} />
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}