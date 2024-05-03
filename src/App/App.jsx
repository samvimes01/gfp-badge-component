import Badge from "../Badge/Badge.jsx";
import "./App.css";

function App() {
  const sizes = ["xs", "sm", "lg"];
  const types = ["primary", "error", "warning", "success", "brand"];

  return (
    <div className="grid grid-cols-3 gap-6">
      {types.map((type) =>
        sizes.map((size) => <Badge key={type + size} type={type} size={size} />)
      )}
    </div>
  );
}

export default App;
