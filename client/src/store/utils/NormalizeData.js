export default function(obj, dataArr) {
  let newState = obj;
  for (let data of dataArr) {
    newState.byId[data.id] = data;
    newState.allIds.push(data.id);
  }
  return newState;
}