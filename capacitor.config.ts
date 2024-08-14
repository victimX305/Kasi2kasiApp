import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.allinit.kasi2kasi',
  appName: 'Kasi2Kasi',
  webDir: 'www',
  "bundledWebRuntime": false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
