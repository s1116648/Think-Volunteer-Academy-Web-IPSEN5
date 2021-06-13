import { PadStartPipe } from "./pad-start.pipe";

describe("pad start pipe tests", () => {
    it("should pad value with zero", () => {
        const value = 1;
        const pipe = new PadStartPipe();
        const result = pipe.transform(value, 2, "0");
        expect(result.length).toBeLessThanOrEqual(2);
        expect(result).toBe("01");
    });
});
