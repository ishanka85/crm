import { CallsModule } from './calls.module';

describe('CustomersModule', () => {
    let callsModule: CallsModule;

    beforeEach(() => {
        callsModule = new CallsModule();
    });

    it('should create an instance', () => {
        expect(callsModule).toBeTruthy();
    });
});
