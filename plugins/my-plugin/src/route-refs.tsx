import { createRouteRef, createSubRouteRef } from '@backstage/core-plugin-api';

export const myPluginRouteRef = createRouteRef({
  id: 'my-plugin',
});

export const harnessCIBuildRouteRef = createSubRouteRef({
  id: 'my-plugin/build',
  parent: myPluginRouteRef,
  path: '/:buildId',
});
