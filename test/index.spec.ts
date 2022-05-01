/* global describe it */
import chai from "chai";
import fn from "../src";

chai.should();

describe("fn", () => {
  it("return value should be 0", async () => {
    fn().should.be.eq(0);
  });
});
