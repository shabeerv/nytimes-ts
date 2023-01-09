import { useAppSelector } from "../../hooks/useAppSelector";
import { searchResultSelector } from "../../selectors/newsSelector";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Articles from "../../components/Articles";

const Home = () => {
  const searchResults = useAppSelector(searchResultSelector);

  return (
    <div>
      <main>
        <Header />
        {searchResults.length > 0 ? <Search /> : <Articles />}
      </main>
    </div>
  );
};

export default Home;
