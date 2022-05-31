import { produce } from 'immer';
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === 'ITEM_ADDED') {
    // Solution 1:
    // const item = { uuid: id++, quantity: 1, ...action.payload };

    // return [...state, item];

    //Solution 2: (with Immer)
    return produce(state, (draft) => {
      const item = state.find((item) => item.uuid === action.payload.uuid);
      item.price = parseInt(action.payload.price);
    });
  }

  if (action.type === 'ITEM_REMOVED') {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === 'ITEM_PRICE_UPDATED') {
    // Solution 1:
    return state.map((item) => {
      // if (item.uuid === action.payload.uuid) {
      //   return { ...item, price: action.payload.price };
      // }

      // return item;

      //Solution 2: (with Immer)
      return produce(item, (draft) => {
        const item = draft.find((item) => item.uuid === action.payload.uuid);
        item.price = parseInt(action.payload.price, 10);
      });
    });
  }

  if (action.type === 'UPDATE_QUANTITY') {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, quantity: action.payload.quantity };
      }

      return item;
    });
  }

  return state;
};

export default reducer;
