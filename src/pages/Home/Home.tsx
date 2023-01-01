import Hero from "../../components/Hero";
import { useAppSelector } from "../../hooks/useAppSelector";
import { searchResultSelector } from "../../selectors/newsSelector";
import Header from "../../components/Header";
import Search from "../../components/Search";

const Home = () => {
  const searchResults = useAppSelector(searchResultSelector);

  return (
    <div>
      <main>
        <Header />
        {/* {searchResults.length > 0 && 
    <Search />} */}
        {searchResults.length > 0 ? <Search /> : <Hero />}
      </main>
    </div>
  );
};

export default Home;
