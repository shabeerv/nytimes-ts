import CustomCard from "../../components/common/CustomCard";
import { useAppSelector } from "../../hooks/useAppSelector";
import { searchResultSelector } from "../../selectors/newsSelector";
import { Grid } from "@mui/material";
import CustomButton from "../../components/common/CustomButton";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { clearSearch } from "../../actions/newsAction";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { nytimesLogo, nytimesURL } from "../../helpers/constants";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { styles } from "./styles";

const Search = () => {
  const searchResults = useAppSelector(searchResultSelector) as Array<any>;
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="center">
        <CustomButton
          text="Clear Search"
          variant="contained"
          onClick={() => dispatch(clearSearch())}
        />
      </Stack>

      <Container sx={styles.container} maxWidth="xl">
        <Grid container spacing={4}>
          {searchResults[page - 1]
            ?.filter(
              //@ts-ignore
              (searchResult?) =>
                searchResult?.byline && searchResult?.byline?.original !== ""
            )
            //@ts-ignore
            ?.map((searchResult?) => (
              <Grid item key={searchResult?._id} xs={12} sm={6} md={4}>
                <CustomCard
                  title={searchResult?.headline.main}
                  byline={searchResult?.byline.orginal}
                  imageURL={
                    searchResult?.multimedia?.length > 0
                      ? `${nytimesURL}${searchResult?.multimedia[0]?.url}`
                      : nytimesLogo
                  }
                  abstract={searchResult.abstract}
                  section={searchResult.section_name}
                  published_date={searchResult.pub_date}
                />
              </Grid>
            ))}

          <Grid container xs={12} justifyContent="center" alignItems="center">
            <Grid item={true}>
              <Pagination
                count={searchResults?.length}
                page={page}
                onChange={(event, value) => {
                  setPage(value);
                }}
                variant="outlined"
                shape="rounded"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Search;
