import { ReactComponent as Circle } from "../assets/circle.svg";
import { ReactComponent as Square } from "../assets/square.svg";

type Props = {
  shape: string | null;
  styles?: React.CSSProperties;
};

export const ManipulateSVG: React.FC<Props> = ({ shape, styles }) => {
  switch (shape) {
    case "circle":
      return <Circle style={styles} />;
    case "square":
      return <Square style={styles} />;
    default:
      return null;
  }
};
