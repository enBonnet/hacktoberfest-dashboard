import { render } from "@testing-library/react";
import Users from "../../components/users";
import userFormat from "../../data/userFormat";

const boxSizes = "100px";
const usersDataMock = [
  {
    username: "enbonnet",
  },
  {
    username: "jhonneycp",
  },
  {
    username: "k3ev",
  },
  {
    username: "angelopez10",
  },
  {
    username: "sebasacuna",
  },
];

describe("Users component", () => {
  it("renders without crashing", () => {
    const { getByTestId, getByText } = render(
      <Users usersData={usersDataMock} boxSizes={boxSizes} />
    );
    expect(getByTestId(usersDataMock[0].username)).toBeInTheDocument();
    expect(getByTestId(usersDataMock[1].username)).toBeInTheDocument();
    expect(getByTestId(usersDataMock[2].username)).toBeInTheDocument();
    expect(getByTestId(usersDataMock[3].username)).toBeInTheDocument();
    expect(getByTestId(usersDataMock[4].username)).toBeInTheDocument();
    expect(getByText(usersDataMock[0].username)).toBeInTheDocument();
    expect(getByText(usersDataMock[1].username)).toBeInTheDocument();
    expect(getByText(usersDataMock[2].username)).toBeInTheDocument();
    expect(getByText(usersDataMock[3].username)).toBeInTheDocument();
    expect(getByText(usersDataMock[4].username)).toBeInTheDocument();
  });

  it("renders without crashing with real users", () => {
    const userDataOriginal = userFormat();
    const { getByTestId, getByText } = render(
      <Users usersData={userDataOriginal} boxSizes={boxSizes} />
    );
    expect(getByTestId(userDataOriginal[0].username)).toBeInTheDocument();
    expect(
      getByTestId(userDataOriginal[userDataOriginal.length - 1].username)
    ).toBeInTheDocument();
    expect(getByText(userDataOriginal[0].username)).toBeInTheDocument();
    expect(
      getByText(userDataOriginal[userDataOriginal.length - 1].username)
    ).toBeInTheDocument();
  });
});
