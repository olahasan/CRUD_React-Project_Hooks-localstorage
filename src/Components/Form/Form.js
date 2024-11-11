import React, { useState, useEffect } from 'react';
import Itemm from '../Item/Item';

function Form() {
    const[Item, setItem] = useState(
        {
            name: "",
        }
    )
    
    const[Allitems, setAllitems] = useState([])
      

    // const[isEdeit, setisEdeit] = useState(true)


 //local storge ola

 useEffect(()=>{
    if(Allitems.length === 0) return;
  localStorage.setItem('Allitems', JSON.stringify(Allitems))
  },[Allitems]);

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('Allitems'));
    setAllitems(tasks || [])
  },[])

 // useEffect(() => {
  //   localStorage.clear();
  // }, []);
    
  const addTask = () => {
    setAllitems(prev => {
      return [...prev]
    //   return [...prev, {name:"olla"}]
    })
  }


  function renameTask(index,newName) {
    setAllitems(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }

 //local storge ola







  //  to submite the form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        addTask(Item.name);
        
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

    // to change the value
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


    // const editCourse = (index , value) => {
    //    let course = Allitems[index];
    //    course['name'] = value;
    //    setAllitems(Allitems);
    // }




  return (

    <div className='all'>
        <form onSubmit={handleSubmit} className='form_1'>
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

                <Itemm key={index} Allitems ={Allitems} setAllitems={setAllitems} e={e} index={index}    onRename={newName => renameTask(index,newName)}/> 
              )} 
            </ul>  
        </div> 


    </div>
  )
}

export default Form
