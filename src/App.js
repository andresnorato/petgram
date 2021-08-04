import React from "react";
import { ListOfCategories } from "./componets/ListOfCategories";
import { ListOfPhotoCards } from "./container/ListOfPhtotoCards";
import { Logo } from "./componets/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards />
        </>
      )}
    </>
  );
};
