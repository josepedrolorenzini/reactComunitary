import React, { useEffect } from 'react'

function Stoner() {



    useEffect(() => {
        const changeColour = new Promise ((resolve , rejecte) => {

            let isActive = true ; 
            setTimeout(() => {
                     isActive ? resolve({Name: 'fu manchu ' , stylo:'Stone ROCK'}) : null ;
            },1000)
        });
        let arrPUZH = [];
        changeColour.then((e) => {
            let result = e;
            arrPUZH.push(result) ; 
            console.log(result )
            console.log(arrPUZH)
            return result ; 
        }).then(rockBand => {
            rockBand.map(e=>{
                let StonerInspiration =    `${e.name}   ${e.stylo}` ; 
              console.log(`  ${e.name}   ${e.stylo}` ); 
                return StonerInspiration ;
            })
        })
        
        setTimeout((...e) => {
            console.log(arrPUZH)
        })
    },[]) ;
    
  return (
    <div>Stoner</div>
  )
}

export default Stoner