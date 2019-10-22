import React from 'react'


function Pagination({arrayMovie,changePagination,changeCurrentIndex,currentIndex}) {
 
  const finalMovies=arrayMovie;
  const PageLinks =[];
  let numberofPages=Math.round(finalMovies.length/20);

  for(let i=1; i<=numberofPages;i++){

    let active = currentIndex === i ? 'active-pagination' : '';
    let lastindex=i*20;
    let firstindex=lastindex-20;

    PageLinks.push(<li key={i} className={`${active}`}  onClick={()=>{
      changePagination(finalMovies.slice(firstindex,lastindex));
      changeCurrentIndex(i);
      window.scrollTo(0, 0);
    }  }>{i}</li>);
    
    

  };

  
  return (
    <div>
      <div className="pagination-container">
      
      <ul>
        {PageLinks}
      </ul>
      </div>
    </div>
  )
}

export default Pagination
