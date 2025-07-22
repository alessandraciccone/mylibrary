import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./assets/Components/MyNav";
import MyFooter from "./assets/Components/MyFooter";
import Welcome from "./assets/Components/Welcome";
import AllBooks from "./assets/Components/AllBooks";
function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllBooks />
      <MyFooter />
    </>
  );
}

export default App;
