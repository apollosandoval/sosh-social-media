export default function(obj, data) {
  let newState = obj;
  for (let item of data) {
    newState.byId[item.id] = item;
    newState.allIds.push(item.id);
  }
  return newState;
}