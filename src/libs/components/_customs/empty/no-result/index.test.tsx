import { render, screen } from "@testing-library/react";
import NoResult from "@components/_customs/empty/no-result";
import { UiProvider } from "@components/_chakra-ui/provider";

const TestComponent: React.FC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <UiProvider>
      <NoResult title={title} subtitle={subtitle} />
    </UiProvider>
  );
};

describe("NoResult", () => {
  it("should render the default title and subtitle", () => {
    render(<TestComponent />);

    expect(screen.getByText("No Result Found")).toBeInTheDocument();
    expect(screen.getByText("Try adjusting your search")).toBeInTheDocument();
    expect(screen.getByTestId("empty-state-icon")).toBeInTheDocument();
  });

  it("should render custom title and subtitle when provided", () => {
    const customTitle = "No Data Available";
    const customSubtitle = "Please refine your query";

    render(<TestComponent title={customTitle} subtitle={customSubtitle} />);

    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customSubtitle)).toBeInTheDocument();
  });

  it("should render the icon correctly", () => {
    render(<TestComponent />);

    const icon = screen.getByTestId("icon-image");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });
});
