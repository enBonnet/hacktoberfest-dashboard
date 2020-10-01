import { render } from "@testing-library/react";
import User from "../../components/user";

const username = "enbonnet";

describe("User component", () => {
  it("renders without crashing", () => {
    const { getByTestId, getByText } = render(
      <User username={username} color="###" boxSizes="100px" />
    );
    expect(getByTestId(username)).toBeInTheDocument();
    expect(getByText(username)).toBeInTheDocument();
  });
});
