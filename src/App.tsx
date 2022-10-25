import { useSearchParams } from "react-router-dom";
import { ManipulateSVG } from "./components/ManipulateSVG";

const App: React.FC = () => {
  const [searchParams] = useSearchParams();

  const query1 = searchParams.get("query1");
  const query2 = searchParams.get("query2");
  const query3 = searchParams.get("query3");

  return (
    <div
      style={Object.assign(
        { background: query1 ? query1 : "white" },
        singlePageStyles
      )}
    >
      <ManipulateSVG
        shape={query3}
        styles={Object.assign({ fill: query2 ? query2 : "white" }, svgStyles)}
      />
    </div>
  );
};

export default App;

const centerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const singlePageStyles: React.CSSProperties = Object.assign(centerStyles, {
  height: "100vh",
});

const svgStyles: React.CSSProperties = {
  width: "500px",
  height: "500px",
};
