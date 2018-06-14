// @flow
import capitalize from './capitalize';

const getComponent = (module: Object, viewType: string): Function => {
  const member = capitalize(viewType);
  const Component = module[member];
  if (!Component) {
    throw new Error(`No matching component found.`);
  }

  return Component;
};

export default getComponent;
