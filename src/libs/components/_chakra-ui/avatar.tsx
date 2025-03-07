import {
  Avatar as ChakraAvatar,
  AvatarGroup as ChakraAvatarGroup,
} from "@chakra-ui/react";
import { forwardRef, ReactElement, ReactNode } from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export interface AvatarProps extends ChakraAvatar.RootProps {
  name?: string;
  src?: string;
  srcSet?: string;
  loading?: ImageProps["loading"];
  icon?: ReactElement;
  fallback?: ReactNode;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { name, src, srcSet, loading, icon, fallback, children, ...rest } =
    props;
  return (
    <ChakraAvatar.Root ref={ref} {...rest}>
      <ChakraAvatar.Fallback name={name}>
        {icon || fallback}
      </ChakraAvatar.Fallback>
      <ChakraAvatar.Image src={src} srcSet={srcSet} loading={loading} />
      {children}
    </ChakraAvatar.Root>
  );
});

Avatar.displayName = "Avatar";

export const AvatarGroup = ChakraAvatarGroup;
