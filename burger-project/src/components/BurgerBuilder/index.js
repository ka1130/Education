import React, { useState, useEffect } from "react";
import Burger from "components/Burger";
import BuildControls from "components/Burger/BuildControls";
import Modal from "components/UI/Modal";
import OrderSummary from "components/Burger/OrderSummary";
import orders from "apis/orders";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [price, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const handlePurchasable = ingredients => {
    const totalIngredients = Object.values(ingredients).reduce(
      (total, amount) => total + amount
    );
    if (totalIngredients > 0) {
      setPurchasable(true);
    } else {
      setPurchasable(false);
    }
  };

  const handleIngredientAdd = type => {
    const newIngredients = { ...ingredients, [type]: ingredients[type] + 1 };
    setIngredients(newIngredients);
    setPrice(price + INGREDIENT_PRICES[type]);
    handlePurchasable(newIngredients);
  };

  const handleIngredientRemove = type => {
    const newIngredients = { ...ingredients, [type]: ingredients[type] - 1 };
    if (ingredients[type] === 0) return;
    setIngredients(newIngredients);
    setPrice(price - INGREDIENT_PRICES[type]);
    handlePurchasable(newIngredients);
  };

  const handleOrderClick = () => setPurchasing(true);

  const handleModalClose = () => setPurchasing(false);

  const handlePurchaseContinue = () => {
    console.log("continue purchase");
    const order = {
      customer: {
        address: {
          country: "Poland",
          street: "Budowlana 1",
          zipCode: "00111"
        },
        email: "lorem@example.pl",
        name: "Jasio Kowalski"
      },
      deliveryMethod: "fastest",
      ingredients,
      price
    };

    orders
      .post("orders.json", order)
      .then(response => {
        console.log(response);
        // setLoading(false);
      })
      .catch(error => {
        console.log("error", error);
        // setLoading(false);
      });
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Modal isOpen={purchasing} onModalClose={handleModalClose}>
        <OrderSummary
          ingredients={ingredients}
          onModalClose={handleModalClose}
          onPurchaseContinue={handlePurchaseContinue}
          price={price}
        />
      </Modal>
      <Burger ingredients={ingredients} purchasable={purchasable} />
      <BuildControls
        onIngredientAdd={handleIngredientAdd}
        onIngredientRemove={handleIngredientRemove}
        disabled={disabledInfo}
        price={price}
        purchasable={purchasable}
        onOrderClick={handleOrderClick}
      />
    </>
  );
};

export default BurgerBuilder;
