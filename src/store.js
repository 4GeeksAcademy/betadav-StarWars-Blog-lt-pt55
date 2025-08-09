export const initialStore = () => {
  return {
    message: null,
    personajes: [],
    planetas: [],
    favoriteCharacters: [],
    favoritePlanets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'add_to_favorite_characters':

      let favCharacters = []
      if (store.favoriteCharacters.includes(action.payload)) {
        favCharacters = store.favoriteCharacters.filter((character) => character != action.payload)

      } else {
        favCharacters = [...store.favoriteCharacters, action.payload]
      }

      return {
        ...store,
        favoriteCharacters: favCharacters
      };
    case 'add_to_favorite_planets':
      let favplanets = []
      if (store.favoritePlanets.includes(action.payload)) {
        favplanets = store.favoritePlanets.filter((planet) => planet != action.payload)

      } else {
        favplanets = [...store.favoritePlanets, action.payload]
      }

      return {
        ...store,
        favoritePlanets: favplanets
      };

    default:
      throw Error('Unknown action.');
  }
}
