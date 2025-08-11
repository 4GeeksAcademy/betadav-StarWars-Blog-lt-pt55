export const initialStore = () => {
  return {
    message: null,
    personajes: [],
    planetas: [],
    favoriteCharacters: [],
    favoritePlanets: [],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
