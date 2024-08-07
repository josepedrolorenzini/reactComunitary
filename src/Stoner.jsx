import React, { useEffect, useState } from 'react'

function Stoner() {
    let [data , setData] = useState([]) ;
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
          //  arrPUZH.push(result) ; 

          //  console.log(result );
           // console.log(arrPUZH);
            setData(result);
            return result ; 

        }).then(rockBand => {

            // rockBand.map(e=>{
            //     let StonerInspiration =    `${e.name}   ${e.stylo}` ; 
            //   console.log(`  ${e.name}   ${e.stylo}` ); 
            //     return StonerInspiration ;
            // }) ; 
            console.log(rockBand)

        }).catch((error) => {
            console.error(`Error: ${error}`) ;
        })
        
        setTimeout((...e) => {
         //   console.log(arrPUZH)
        }, 1000)
    },[]) ;

  return (
    <div>Stoner
         

        { console.log(data.Name)}
        <h1>{data.Name}</h1>
        <h2>{data.stylo}</h2>
      
       
        
    </div>
  )
}

export default Stoner