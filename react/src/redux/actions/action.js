export const ADD = (item) => {
  console.log(item);
  // let itemdata = item
  // itemdata = [{...item,quantity:item.quantity+1}]
  // console.log("gcjsg" ,itemdata);
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove items
export const DEL = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual items
export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
