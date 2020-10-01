import userFormat from "../../data/userFormat";

const usersData = userFormat();

describe("Users format", () => {
  it("all users must be unique", () => {
    const uniqueUsers = [...new Set(usersData.map((user) => user.username))];
    expect(uniqueUsers.length === usersData.length).toBeTruthy();
  });
});
