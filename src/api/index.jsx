import Lodgings from '../datas/logements.json';

export const getAllLodgings = async () => {
  return Lodgings;
};

export const getLodgingsById = async (id) => {
  return Lodgings.find((lodging) => lodging.id === id);
};