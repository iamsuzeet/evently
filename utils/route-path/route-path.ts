import { publicRoutes } from './public-routes';
import { privateRoutes } from './private-routes';

const routePaths = {
  ...publicRoutes,
  ...privateRoutes,
} as const;

export default routePaths;
