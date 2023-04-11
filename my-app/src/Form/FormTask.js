import React,{useContext, useEffect, useState} from 'react';
import { Link, useNavigate,useSearchParams} from 'react-router-dom';
import { StateContext } from '../Context/StateContext';

const FormTask = () => {
    const[updateName,SetUpdatedName]=useState("");
    const[description,SetUpdatedDescription]=useState("");
    const[completed,Setcompletion]=useState("");
    // const[arrayvalue,setArray]=useState(JSON.parse(localStorage.getItem('arrayvalue'))||[]);
    const[showerror,setError]=useState(false);
    const[params]=useSearchParams() 
    console.log(params.get("name"));
    const navigate=useNavigate();

    //context
   const {state,dispatch}=useContext(StateContext);
   console.log("state context text",state);
    
    useEffect(()=>{
        if(params.get("name")!=null){
            const tem=JSON.parse(localStorage.getItem('arrayvalue'));
            console.log(tem)
            const edit=tem.find((item)=>item.name === params.get("name"));
            console.log(edit)
            SetUpdatedName(edit.name);
            SetUpdatedDescription(edit.des);
            Setcompletion(edit.iscomplete);
    
    }},[params])

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('updateName'));
    //     if (updateName) {
    //      setItems(updateName);
    //     }
    //   }, [])


   

    const handleUpdatedName=(e)=>{
        console.log("tasktname",e.target.value)
        SetUpdatedName(e.target.value)
    }
    
    const handleDesvalue=(e)=>{
        console.log("description",e.target.value)
        SetUpdatedDescription(e.target.value)
    }
    const handlecheckbox=(e)=>{
        console.log("completed",e.target.checked)
        Setcompletion(e.target.checked ? "Completed":"InComplete")
    }

    

    const handlesubmit=(e)=>{
        e.preventDefault();
        
        setError(true);
        if(updateName==="" || description==="")return;
       
        console.log(updateName,description,completed)
        // const arrVal={name:updateName,des:description,iscomplete:completed}
        // setArray([...arrayvalue, arrVal]);
        // console.log(arrayvalue)
    //    const data=JSON.parse(localStorage.getItem('arrayvalue'))
    //    if(data===null||undefined){
    //     localStorage.setItem("arrayvalue",JSON.stringify(arrayvalue))
    //    }else{
    //     const temp = [...data,{name:updateName,des:description,iscomplete:completed}]
    //     localStorage.setItem("arrayvalue",JSON.stringify(temp))~
    //    }
        if(params.get("name")==null){
            // const arrVal={name:updateName,des:description,iscomplete:completed}
            // console.log(arrVal)
            // setArray([...arrayvalue, arrVal]);
            dispatch({type:"UPDATE_FORM",payload:[...state.arrayvalue,{name:updateName,des:description,iscomplete:completed}]})

           
        }else{
            const editObj =state.arrayvalue.map(obj=>{
                if(obj.name === params.get("name")){
                    return {name:updateName,des:description,iscomplete:completed};
                }
                return obj;
            });
            console.log(editObj)
            // setArray(editObj);
            dispatch({type:"UPDATE_FORM",payload:editObj})
            
        }
  
       
    }

    
    
    
    //  localStorage.setItem('arrayvalue', JSON.stringify(state.arrayvalue));
        
   
    // const gotohome=()=>{
    //     navigate("/home")
    // }
        // pusharr();
        

        // To_Home();  

        // const info=JSON.parse(localStorage.getItem("arrayvalue"))
        // if(info===null){
        //     localStorage.setItem("arrayvalue",JSON.stringify("arrayvalue"))
        // }
        // else{
        //     const tempData=[...info,{name:updateName,des:description,taskstatus:completed}]
        //     localStorage.setItem("arrayvalue",JSON.stringify(tempData));
        // }
// 
       
       
    
    //   const pusharr=()=>{
    //     setArray([...arrayvalue, {name:updateName,des:description,taskstatus:completed}]);
    //     //console.log(arrayvalue)
    // }

    const To_Home=()=>{
        navigate("/Home")
    }
    
    const To_Login=()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>Form Creation</h1>
    <button style={{margin:'0 10px 0 20px',color:'blue'} }onClick={To_Home}>Home</button>
    <button style={{margin:'0 10px 0 20px',color:'red'} }onClick={To_Login}>Login</button>
    <hr/>



     <form onSubmit={handlesubmit} style={{margin: '40px 240px 80px',border: '2px solid red', borderRadius:'5px', padding: '120px 49px', backgroundColor:'#ccc'}}>
            <label >Name:</label>
            <input type="text" placeholder="updateName" value={updateName} onChange={handleUpdatedName}/><br/>
            {updateName === "" && showerror &&<p>name required</p>}
            <label >Description:</label>
            <input type="text" placeholder="description" value={description}  onChange={handleDesvalue}/><br/>
            {description === ""&& showerror &&<p>Description required</p>}
            <label >Task Status:</label>
            <input type="checkbox" checked={completed} onChange={handlecheckbox}/><br/>
            <hr></hr>
            <input type="submit"/>
        </form>

        <button onClick={()=>dispatch({type:"DISPLAY",payload:true})}>Display</button>
        {/* <div>
            <button onClick={To_Home}>Home</button>

        </div> */}
        {/* <ul>Task List:
            
            {arrayvalue.map((item,index)=>(
                <li key={index}>Name:{item.name} <br/> Description:{item.des} <br/> Task Status:{item.taskstatus}</li>
               
               
            ))}
        </ul> */}
      
    </div>
  )
}

export default FormTask