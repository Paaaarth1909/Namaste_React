import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<AppLayout />);
