import app from "../app";
import * as supertest from "supertest";
import { expect } from "chai";

describe("app", () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });
  it("can return hello world", done => {
    request.get("/").expect(200, done);
  });
});
