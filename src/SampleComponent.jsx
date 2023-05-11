import {useState} from "react"
import Child from './Child'

export default function Praneeth(){
    const [data,setData]=useState({
        name:"Hanuman",
        age:28
    })

    // const increaseAge=()=>{
    //    setData(prevState=>({...prevState,age:prevState.age+1})) 
    // }

    const changeName=(nameArg)=>{
        setData(prevState=>({...prevState,name:nameArg}))
    }

    const {name,age}=data
    return(
        <>
        {/* <h2> {name} is {age} years old</h2> */}
        {/* <button onClick={()=>increaseAge()}> Increase age </button> */}
        <Child changeNameValue={changeName}/>
        </>
    )
}
