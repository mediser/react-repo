import { useState } from "react";

export const useUserForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);
    
    //función que se encarga de escuchar cambios
    const handleChanges = ({target}) =>{
        const {name,value} = target;

        console.log("target "+target);
        console.log("name "+name);
        console.log("value "+value);

        //armo un JSON que se va a ir guardando en la variable form
        setForm({
            ...form, 
            [name]: value,
        })
    }
    return{form,setForm,handleChanges}
}



