import React, { useState, useEffect } from "react";
import Burger from "components/Burger";
import BuildControls from "components/Burger/BuildControls";
import Modal from "components/UI/Modal";
import Spinner from "components/UI/Spinner";
import OrderSummary from "components/Burger/OrderSummary";
import withErrorHandler from "components/hoc/withErrorHandler";
import orders from "apis/orders";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await orders.get("ingredients.json");
      setIngredients(response.data);
    })();
  }, []);

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
    setLoading(true);
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
        setPurchasing(false);
        setLoading(false);
      })
      .catch(error => {
        setPurchasing(false);
        setLoading(false);
      });
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const renderModalContent = () => {
    if (!loading && ingredients) {
      return (
        <OrderSummary
          ingredients={ingredients}
          onModalClose={handleModalClose}
          onPurchaseContinue={handlePurchaseContinue}
          price={price}
        />
      );
    } else {
      return <Spinner />;
    }
  };

  const renderBurgerContents = () => {
    if (ingredients) {
      return (
        <>
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
    } else {
      return <Spinner />;
    }
  };

  return (
    <>
      <Modal isOpen={purchasing} onModalClose={handleModalClose}>
        {renderModalContent()}
      </Modal>
      {renderBurgerContents()}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, orders);
