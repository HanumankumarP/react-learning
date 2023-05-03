import {useState} from 'react'
export default function Child({changeNameValue}){
    const [name,setName]=useState({name:'',age:28})

    const updateName=(nameParam)=>{
        setName(prevState=>({...prevState,name:nameParam.target.value}))
    }
    return (
        <form>
            <input type="text" value={name.name} onChange={e=>updateName(e)}/> <br/>
            <button onClick={changeNameValue(name.name)}> Update Name </button>
        </form>
    )

}