import Lodgings from '../datas/logements.json';

export const getAllLodgings =  () => {
  return Lodgings;
};

export const getLodgingsById =  (id) => {
  return Lodgings.find((lodging) => lodging.id === id);
};