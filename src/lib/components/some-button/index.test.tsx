import { screen, render } from "@testing-library/react";
import SomeButton from ".";

describe("<SomeButton />", () => {
  test("It renders", () => {
    render(<SomeButton />);
    expect(screen.getByText(/Some/i)).toBeInTheDocument();
  });
});
