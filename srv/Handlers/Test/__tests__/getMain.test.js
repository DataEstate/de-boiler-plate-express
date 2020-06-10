import { expect } from "chai";
import { getMain } from "../getMain";

describe("Handlers/Test/getMain", () => {
  it("Can handle requests", () => {
    const mockRes = {
      send: jest.fn((message) => message),
    };
    const stubReq = {
      get: jest.fn(),
    };
    getMain(stubReq, mockRes, jest.fn());
    expect(mockRes.send.mock.calls.length).to.equal(1);
    expect(mockRes.send.mock.calls[0][0].message).to.equal(
      "This is the main test route"
    );
  });
});
