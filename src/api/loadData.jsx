import lodgings from '../datas/logements.json';

export const loader = async () => {
    return lodgings;
  };

export const loaderId = async ({ params }) => {
    const { id } = params;
    const lodging = lodgings.find((lodging) => lodging.id === id);
    if (!lodging) {
      throw new Error(Error.message);
    }
    return lodging
  };
  