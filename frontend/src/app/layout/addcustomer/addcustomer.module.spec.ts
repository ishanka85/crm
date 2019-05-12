import { AddcustomerModule } from './addcustomer.module';

describe('CustomersModule', () => {
    let addcustomerModule: AddcustomerModule;

    beforeEach(() => {
        addcustomerModule = new AddcustomerModule();
    });

    it('should create an instance', () => {
        expect(addcustomerModule).toBeTruthy();
    });
});
