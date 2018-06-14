// @flow
import config from './config';
import type { Config } from '../../../types';

const getConfig = (fragmentType: string): Config => {
  const result = config[fragmentType];
  if (!result) {
    throw new Error(`No config found for fragmentType="${fragmentType}".`);
  }
  return result;
};

export default getConfig;
