import "./App.css";
import AppRouter from "./AppRouter/AppRouter";
import Loader from "./components/Loader/Loader";
import { isLoadingSelector } from "./selectors/statusSelector";
import loadingList from "./helpers/ActionTracker";
import { useAppSelector } from "./hooks/useAppSelector";
import { AppProviders } from "./providers/AppProvider";

function App() {
  const load = useAppSelector((state) => isLoadingSelector(loadingList, state));

  return (
    <>
      <Loader show={load} />
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </>
  );
}

export default App;
