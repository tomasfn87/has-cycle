import { has_cycle } from "../has_cycle"
import { expect } from "chai";

describe('has_cycle', function() {
    it('../has_cycle.ts.has_cycle(["1", "2", "3", "1"]) -> 1', function() {
      let result = has_cycle(["1","2","3","1"]);
      expect(result).to.eql(1); // and it also works just fine here, so I'll be testing it #4
    });

    it('../has_cycle.ts.has_cycle([1, 2, 3, 1]) -> 1', function() {
      let result = has_cycle([1,2,3,1]);
      expect(result).to.eql(1); // and it also works just fine here, so I'll be testing it #4
    });

    it('../has_cycle.ts.has_cycle(["1", "2", "3", "4"]) -> 0', function() {
      let result = has_cycle(["1","2","3","4"]);
      expect(result).to.eql(0); // and it also works just fine here, so I'll be testing it #4
    });

    it('../has_cycle.ts.has_cycle([1, 2, 3, 4]) -> 0', function() {
      let result = has_cycle([1,2,3,4]);
      expect(result).to.eql(0); // and it also works just fine here, so I'll be testing it #4
    });

    it('../has_cycle.ts.has_cycle(["1"]) -> 0', function() {
      let result = has_cycle(["1"]);
      expect(result).to.eql(0); // and it also works just fine here, so I'll be testing it #4
    });

    it('../has_cycle.ts.has_cycle([1]) -> 0', function() {
      let result = has_cycle([1]);
      expect(result).to.eql(0); // and it also works just fine here, so I'll be testing it #4
    });

    it('../has_cycle.ts.has_cycle([]) -> 0', function() {
      let result = has_cycle([]);
      expect(result).to.eql(0); // and it also works just fine here, so I'll be testing it #4
    });
});  