import { AdduserModule } from './adduser.module';

describe('CustomersModule', () => {
    let adduserModule: AdduserModule;

    beforeEach(() => {
        adduserModule = new AdduserModule();
    });

    it('should create an instance', () => {
        expect(adduserModule).toBeTruthy();
    });
});
