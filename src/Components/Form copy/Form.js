import React, { useState } from 'react';
import Itemm from '../Item/Item';

function Form() {
    const[Item, setItem] = useState(
        {
            name: "",
        }
    )
    
    const[Allitems, setAllitems] = useState([])

    // const[isEdeit, setisEdeit] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault();
        if(Item.name.length === 0){
            return ""
        }else{
        // console.log("yes");
        // console.log(Item.name);
        // console.log(Item.name.length);
        setItem({
            name: "",
        })
        Allitems.push(Item);
        }
    }

    const handleChange = (e) => {
        // console.log(e.target.name , e.target.value);

        setItem({
            ...Item,
            name: e.target.value,
        });
        
     }

    // const handleClick =(e, index) => {

    //     let handleClickIndex = index;
    //     // console.log(handleClickIndex);

    //     const ooo = Allitems.filter((c , index)=>{
    //         let oooIndex = index;
    //         // console.log(oooIndex);

    //         return(
    //             handleClickIndex === oooIndex ? "" : c
    //         )
    //     })

    //     setAllitems(ooo)
    // }


    // const handleTrue =() => {
    //     <form >
    //         <input type='text' />
    //         <button>Add</button>
    //     </form>
    //     setisEdeit(!isEdeit)
    // }

    // const handleFalse =() => {
    //     <p>false</p>
    //     setisEdeit(!isEdeit)
    // }




  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Write Your Item' name='name' value={Item.name} onChange={handleChange}/>
            <button>Add</button>
        </form>

        <div>
            <ul key='Math.random'>
              {Allitems.map((e, index)=>
                   
                   
                // <li key={index}>
                //   <span>{e.name}</span>
                //   <button onClick={isEdeit? handleTrue : handleFalse}>Edit</button>
                //   <button onClick={(e)=>handleClick(e , index)}>Delete</button>
                // </li> 

                <Itemm key={index} Allitems ={Allitems} setAllitems={setAllitems} e={e} index={index}/> 
              )} 
            </ul>  
        </div> 


    </div>
  )
}

export default Form