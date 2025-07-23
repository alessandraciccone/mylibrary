import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./assets/Components/MyNav";
import MyFooter from "./assets/Components/MyFooter";
import Welcome from "./assets/Components/Welcome";
import AllBooks from "./assets/Components/AllBooks";
import SingleBook from "./assets/Components/SingleBook";
import book from "./data/fantasy.json";
import BookList from "./assets/Components/BookList";
function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      {/*<AllBooks />*/}
      <SingleBook libri={book[5]} />
      <BookList books={book} />

      <MyFooter />
    </>
  );
}
export default App;
