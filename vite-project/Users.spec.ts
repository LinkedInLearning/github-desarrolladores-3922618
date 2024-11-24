import { render, screen } from "@testing-library/react";
import {Users} from './Users'

describe("User", () => {
  let users:Users;
  
  beforeEach(()=>{
    users = new Users()
  })

  it("renders heading", async () => {
       
      expect(users.response()).toBe(true);
  });


});
