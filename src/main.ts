import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {registerLicense} from '@syncfusion/ej2-base';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH9ad0BmW3tfdnRcTg==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0RqWHpbcnBUQGJYWQ==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRiUH5bdXZRR2ZfWUw=;OTcxMzcyQDMyMzAyZTM0MmUzME92ZE5qTjdObXVBanN5Y20reGk1K2VheFRQVFhuVDhXNDArWGFRRjRmME09;OTcxMzczQDMyMzAyZTM0MmUzMEZJZElZZ1V6UEpUVHBTRXVOMkhuVGQ4ajlDQjg2dlBxb1M2YkNRWVZBSUU9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWHZfdXFXQmFbUER+;OTcxMzc1QDMyMzAyZTM0MmUzME9vVHVsVm1HMjdkOUZ5YWxqcjRuRzNKZkRoSVBGbXZoL1A3dXlpZUNjZUU9;OTcxMzc2QDMyMzAyZTM0MmUzMFErVnhqQlpYSDhYM0c1bXRqMmgzZFVRdUdVZmx3VCtmRGRXdDh2UUVkY1k9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRiUH5bdXZRR2dVU0w=;OTcxMzc4QDMyMzAyZTM0MmUzME1ZNy9hUXcxZTFZOTZsaW53d0IveEFSQmVaQ01aN2RFTFZUaXZNUDRKS2c9;OTcxMzc5QDMyMzAyZTM0MmUzMGZGQkJWUjJ4TzFtcVVDQkthUmhES0o2SUlrZlZ1M1B6aDIxM29RQWpuK0U9;OTcxMzgwQDMyMzAyZTM0MmUzME9vVHVsVm1HMjdkOUZ5YWxqcjRuRzNKZkRoSVBGbXZoL1A3dXlpZUNjZUU9');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
