import React from "react";
import { useGlobalContext } from "../context";
import Cocktails from "./Cocktails";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Sorry none of our cocktails match your search
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return <Cocktails key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
