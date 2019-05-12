import { AddemailModule } from './addemail.module';

describe('CustomersModule', () => {
    let addemailModule: AddemailModule;

    beforeEach(() => {
        addemailModule = new AddemailModule();
    });

    it('should create an instance', () => {
        expect(addemailModule).toBeTruthy();
    });
});
