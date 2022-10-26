// test index.ts

import {expect, it, describe} from 'vitest';
import {getDefaultUser} from '.';

describe("#getUser", () => {
    it("should return a user", () => {
        expect(getDefaultUser()).toMatchInlineSnapshot(`
          {
            "id": "1",
            "name": "Pavel \\"PK\\" Kaminsky",
          }
        `);
    });
})