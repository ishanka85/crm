import { UpdatecustomerModule } from './updatecustomer.module';

describe('CustomersModule', () => {
    let updatecustomerModule: UpdatecustomerModule;

    beforeEach(() => {
        updatecustomerModule = new UpdatecustomerModule();
    });

    it('should create an instance', () => {
        expect(updatecustomerModule).toBeTruthy();
    });
});
