function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }

    case "remove": {
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    }

    case "clear":
      return [];

    default:
      return state;
  }
}

export default cartReducer;
