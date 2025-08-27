import styled from "@emotion/styled";
import { shimmerAnimation } from "../../utils/styles/animation";

export interface SkeletonLoaderProps {
  width?: number;
  height?: number;
}

const Loader = styled.div<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    width: width ? width : "100%",
    height: height ? height : 16,
    borderRadius: 4,
    background: `linear-gradient(
      90deg,
      rgba(220, 220, 220, 0.2) 25%,
      rgba(200, 200, 200, 0.4) 50%,
      rgba(220, 220, 220, 0.2) 75%
    )`,
    backgroundSize: "200px 100%",
    animation: `${shimmerAnimation} 1.5s infinite linear`,
  })
);

export const SkeletonLoader = (props: SkeletonLoaderProps) => {
  return <Loader {...props} />;
};
