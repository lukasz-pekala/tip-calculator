export const ITEM_ADDED = 'ITEM_ADDED';

export const addNewItem = ({ name, price }) => {
  return {
    type: ITEM_ADDED,
    payload: {
      name,
      price
    }
  };
};

export const removeItem = (uuid) => {
  return {
    type: 'ITEM_REMOVED',
    payload: {
      uuid
    }
  };
};
