import React, { useState , useRef } from 'react'
// import React, { useState , useRef, useEffect } from 'react'

function Item({Allitems, setAllitems, e , index   ,onRename}) {

  const[isEdeit, setisEdeit] = useState(false)

    const handleClick =(e, index) => {

        let handleClickIndex = index;

        const ooo = Allitems.filter((c , index)=>{
            let oooIndex = index;

            return(
                handleClickIndex === oooIndex ? "" : c
            )
        })

        setAllitems(ooo)
    }


    const toggle = () => {
      // console.log(isEdeit);
      setisEdeit(!isEdeit);
    }

    const renderCourse = () => {
       return(
        <li key={index}>
          <span>{e.name}</span>
          <button onClick={()=>toggle()}>Edit</button>
          <button onClick={(e)=>handleClick(e , index)}>Delete</button>
        </li>
       )
    }


    const editCourse = (index , value) => {
      let courses = Allitems;
      let course = courses[index];
        // course.name = value;
        course['name'] = value;
      // console.log(course)
      setAllitems(courses);
    }
    

    const inputRef = useRef(null);

    const updateCourseItem = (e) => {
      e.preventDefault();
      // editCourse(index , this.input.value)
      editCourse(index , inputRef.current.value)
      // editCourse(index , "ola")


      // setisEdeit(!isEdeit);
      toggle()
    }

    const renderUpdateCourse = () => {
       return(
        <form onSubmit={updateCourseItem} className='form_2'>
          <input type="text" defaultValue={e.name} ref={inputRef}  onChange={ev => onRename(ev.target.value)}/>
          {/* <input type="text" defaultValue={e.name} ref={(v)=>{this.input = v}}/> */}
          <button>Update</button>
        </form>
       )
    }

    //local storge ola

    //local storge ola
   
  return (
    <>
      { isEdeit? renderUpdateCourse() : renderCourse()}
    </>
  )
}

export default Item




// window.localStorage.clear();