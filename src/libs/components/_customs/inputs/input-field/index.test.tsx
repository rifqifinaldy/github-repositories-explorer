import { render, screen, fireEvent } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import { UiProvider } from "@components/_chakra-ui/provider";
import InputField from ".";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();
  return (
    <UiProvider>
      <FormProvider {...methods}>{children}</FormProvider>
    </UiProvider>
  );
};

describe("InputField Component", () => {
  test("should render input field with label", () => {
    render(
      <Wrapper>
        <InputField id="search" label="Search" name="search" />
      </Wrapper>
    );

    // Check if the input field and label are rendered
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("should render input field with helper text", () => {
    render(
      <Wrapper>
        <InputField
          id="search"
          label="Search"
          name="search"
          helperText="Enter a search term"
        />
      </Wrapper>
    );

    expect(screen.getByText("Enter a search term")).toBeInTheDocument();
  });

  test("should render left and right elements in input group", () => {
    render(
      <Wrapper>
        <InputField
          id="search"
          label="Search"
          name="search"
          leftElement={<span>🔍</span>}
          rightElement={<span>✖️</span>}
        />
      </Wrapper>
    );

    expect(screen.getByText("🔍")).toBeInTheDocument(); // Check if left element is rendered
    expect(screen.getByText("✖️")).toBeInTheDocument(); // Check if right element is rendered
  });

  test("should render left and right addons in input group", () => {
    render(
      <Wrapper>
        <InputField
          id="search"
          label="Search"
          name="search"
          leftAddon="$"
          rightAddon="USD"
        />
      </Wrapper>
    );

    expect(screen.getByText("$")).toBeInTheDocument(); // Check if left addon is rendered
    expect(screen.getByText("USD")).toBeInTheDocument(); // Check if right addon is rendered
  });

  test("should pass input value correctly", () => {
    render(
      <Wrapper>
        <InputField id="search" label="Search" name="search" />
      </Wrapper>
    );

    const input = screen.getByLabelText(/Search/i);
    fireEvent.change(input, { target: { value: "test value" } });

    expect(input).toHaveValue("test value");
  });
});
