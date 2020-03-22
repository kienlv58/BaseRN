import EnvDev from './env.dev';
import EnvProd from './env.prod';

const env = __DEV__ ? EnvDev : EnvProd;
export default env;
