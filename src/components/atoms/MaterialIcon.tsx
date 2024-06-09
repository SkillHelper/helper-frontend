import styled from "styled-components";

interface MaterialIconProps {
  children: string;
  width?: number;
  color?: string;
  fill?: boolean;
}
export default function MaterialIcon({
  children,
  width,
  color,
  fill,
}: MaterialIconProps) {
  return (
    <Span
      style={{
        fontSize: `${width || 24}px`,
        width: `${width || 24}px`,
        height: `${width || 24}px`,
        color: color || "inherit",
      }}
      $fill={fill}
      className={["material-symbols-rounded"].join(" ")}
    >
      {children}
    </Span>
  );
}

const Span = styled.span<{ $fill?: boolean }>`
  font-variation-settings: "FILL" ${(props) => (props.$fill ? 1 : 0)},
    "wght" 400, "GRAD" 0, "opsz" 24;
  user-select: none;
`;
