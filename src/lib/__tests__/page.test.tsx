import Home from "@gh-api/app/page";
import { screen, render } from "@testing-library/react";

describe("<Home />", () => {
  test("It renders", () => {
    render(<Home />);
    expect(screen.getByText(/setting up/i)).toBeInTheDocument();
  });
});
