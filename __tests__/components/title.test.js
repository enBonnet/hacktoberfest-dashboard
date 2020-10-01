import { render } from "@testing-library/react";
import Title from "../../components/title";

describe("Title component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Title />);
    expect(getByText(/Feliz/i)).toBeInTheDocument();
    expect(getByText(/Hacktoberfest/i)).toBeInTheDocument();
    expect(getByText(/2020!/i)).toBeInTheDocument();
  });
});
