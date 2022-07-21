import { DbRequestsInterceptor } from "./db-requests.interceptor";

describe('DbRequestsInterceptor', () => {
  it('should be defined', () => {
    expect(new DbRequestsInterceptor()).toBeDefined();
  });
});
