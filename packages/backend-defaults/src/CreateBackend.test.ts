/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  coreServices,
  createServiceFactory,
} from '@backstage/backend-plugin-api';
import { createBackend } from './CreateBackend';

describe('createBackend', () => {
  it('should not throw when overriding a default service implementation', () => {
    const backend = createBackend();

    expect(() => {
      backend.add(
        createServiceFactory({
          service: coreServices.rootLifecycle,
          deps: {},
          factory: async () => ({
            addStartupHook: () => {},
            addShutdownHook: () => {},
          }),
        }),
      );
    }).not.toThrow();
  });

  it('should throw on duplicate service implementations', () => {
    const backend = createBackend();

    backend.add(
      createServiceFactory({
        service: coreServices.rootLifecycle,
        deps: {},
        factory: async () => ({
          addStartupHook: () => {},
          addShutdownHook: () => {},
        }),
      }),
    );

    expect(() => {
      backend.add(
        createServiceFactory({
          service: coreServices.rootLifecycle,
          deps: {},
          factory: async () => ({
            addStartupHook: () => {},
            addShutdownHook: () => {},
          }),
        }),
      );
    }).toThrow(
      'Duplicate service implementations provided for core.rootLifecycle',
    );
  });

  it('should throw when providing a plugin metadata service implementation', () => {
    const backend = createBackend();

    expect(() =>
      backend.add(
        createServiceFactory({
          service: coreServices.pluginMetadata,
          deps: {},
          factory: async () => ({ getId: () => 'test' }),
        }),
      ),
    ).toThrow('The core.pluginMetadata service cannot be overridden');
  });
});
