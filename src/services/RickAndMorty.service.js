import { API_RM } from "../constants/Api.constants";

//Servicio para comunicarse con la API que se importa 

class RickAndMortyService{

    //creo una funcion para traer todos los personajes en un JSON
    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS())
        return response.json(); 
    }

    //creo una funcion para traer todos los personajes por ID en un JSON
    async getCharactersById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id))
        return response.json(); 
    }

}
export default new RickAndMortyService();