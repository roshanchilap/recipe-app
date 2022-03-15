import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { act } from "react-dom/test-utils";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});

  const [active, setactive] = useState("Instructions");

  const recipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    recipeDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div key={details.id}>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={active === "Instructions" ? "active" : ""}
          onClick={() => {
            setactive("Instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={active === "Ingredients" ? "active" : ""}
          onClick={() => {
            setactive("Ingredients");
          }}
        >
          Ingredients
        </Button>
        {active === "Instructions" && (
          <InstructionWrapper>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </InstructionWrapper>
        )}
        {active === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const InstructionWrapper = styled.div`
  margin-top: 2rem;

  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  &.active {
    color: white;
  }
`;
const Info = styled.div`
  margin-left: 10rem;
  line-height: 2rem;
  font-weight: 400;
`;

export default Recipe;
