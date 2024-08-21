import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name]);

  return (
    <DetailWrapper
      as={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper
        as={motion.div}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>{details.title}</Title>
        <Image src={details.image} alt={details.title} />
      </ContentWrapper>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ingredients
        </Button>
        <TextContent
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "instructions" && (
            <>
              <Summary dangerouslySetInnerHTML={{ __html: details.summary }} />
              <Instructions
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              />
            </>
          )}
          {activeTab === "ingredients" && (
            <IngredientsList>
              {details.extendedIngredients.map((ingredient) => (
                <IngredientItem key={ingredient.id}>
                  {ingredient.name}
                </IngredientItem>
              ))}
            </IngredientsList>
          )}
        </TextContent>
      </Info>
    </DetailWrapper>
  );
};

// Styled Components
const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 3rem;
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.2rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const Button = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem 1rem 0;
  font-size: 1rem;
  color: #313131;
  background-color: white;
  border: 2px solid #313131;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #313131;
    color: white;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const TextContent = styled.div`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Summary = styled.h3`
  font-size: 0.8rem;
  color: #fff;
  line-height: 1.6rem;
  margin-bottom: 1.5rem;
`;

const Instructions = styled.h3`
  font-size: 0.8rem;
  color: #fff;
  line-height: 1.6rem;
`;

const IngredientsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

const IngredientItem = styled.li`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  line-height: 2rem;
  margin-bottom: 0.2rem;
`;

export default Recipe;
