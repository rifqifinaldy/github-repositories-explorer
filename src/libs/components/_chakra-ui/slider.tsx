import { Slider as ChakraSlider, For, HStack } from "@chakra-ui/react";
import { forwardRef, ReactNode } from "react";

export interface SliderProps extends ChakraSlider.RootProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>;
  label?: ReactNode;
  showValue?: boolean;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { marks: marksProp, label, showValue, ...rest } = props;
  const value = props.defaultValue ?? props.value;

  const marks = marksProp?.map((mark) => {
    if (typeof mark === "number") return { value: mark, label: undefined };
    return mark;
  });

  const hasMarkLabel = !!marks?.some((mark) => mark.label);

  return (
    <ChakraSlider.Root ref={ref} thumbAlignment="center" {...rest}>
      {label && !showValue && <ChakraSlider.Label>{label}</ChakraSlider.Label>}
      {label && showValue && (
        <HStack justify="space-between">
          <ChakraSlider.Label>{label}</ChakraSlider.Label>
          <ChakraSlider.ValueText />
        </HStack>
      )}
      <ChakraSlider.Control data-has-mark-label={hasMarkLabel || undefined}>
        <ChakraSlider.Track>
          <ChakraSlider.Range />
        </ChakraSlider.Track>
        <SliderThumbs value={value} />
        <SliderMarks marks={marks} />
      </ChakraSlider.Control>
    </ChakraSlider.Root>
  );
});

Slider.displayName = "Slider";

function SliderThumbs(props: { value?: number[] }) {
  const { value } = props;
  return (
    <For each={value}>
      {(_, index) => (
        <ChakraSlider.Thumb key={index} index={index}>
          <ChakraSlider.HiddenInput />
        </ChakraSlider.Thumb>
      )}
    </For>
  );
}

interface SliderMarksProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>;
}

const SliderMarks = forwardRef<HTMLDivElement, SliderMarksProps>(
  (props, ref) => {
    const { marks } = props;
    if (!marks?.length) return null;

    return (
      <ChakraSlider.MarkerGroup ref={ref}>
        {marks.map((mark, index) => {
          const value = typeof mark === "number" ? mark : mark.value;
          const label = typeof mark === "number" ? undefined : mark.label;
          return (
            <ChakraSlider.Marker key={index} value={value}>
              <ChakraSlider.MarkerIndicator />
              {label}
            </ChakraSlider.Marker>
          );
        })}
      </ChakraSlider.MarkerGroup>
    );
  }
);

SliderMarks.displayName = "SliderMarks";
