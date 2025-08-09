export const initialStore=()=>{
  return{
    message: null,
    personajes: [],
    planetas: [],
    favoriteCharacters: [],
    favoritePlanets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'add_to_favorite_characters':

      return {
        ...store,
        favoriteCharacters: [...store.favoriteCharacters, action.payload]
      };
    case 'add_to_favorite_planets':

      return {
        ...store,
        favoritePlanets: [...store.favoritePlanets, action.payload]
      };
    
    default:
      throw Error('Unknown action.');
  }    
}
