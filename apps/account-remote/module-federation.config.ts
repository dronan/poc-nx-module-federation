import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'account-remote',
  exposes: {
    './Routes': 'apps/account-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
