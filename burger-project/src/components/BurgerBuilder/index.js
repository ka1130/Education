import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  initIngredients
} from "redux/actions/ingredientsActions";
import { initPurchase } from "redux/actions/ordersActions";
import Burger from "components/Burger";
import BuildControls from "components/Burger/BuildControls";
import Modal from "components/UI/Modal";
import Spinner from "components/UI/Spinner";
import OrderSummary from "components/Burger/OrderSummary";
import withErrorHandler from "components/hoc/withErrorHandler";
import orders from "apis/orders";

const BurgerBuilder = ({
  burger,
  history,
  initIngredients,
  initPurchase,
  addIngredient,
  removeIngredient
}) => {
  const { ingredients, price } = burger;
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    initIngredients();
  }, []);

  const purchasable = ingredients
    ? Object.values(ingredients).reduce((el, acc) => el + acc) > 0
    : false;

  const handleOrderClick = () => setPurchasing(true);

  const handleModalClose = () => setPurchasing(false);

  const handlePurchaseContinue = () => {
    initPurchase();
    history.push("/checkout", { ingredients, price });
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const renderModalContent = () => {
    if (ingredients) {
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
    return (
      <>
        <Burger ingredients={ingredients} purchasable={purchasable} />
        <BuildControls
          onIngredientAdd={addIngredient}
          onIngredientRemove={removeIngredient}
          disabled={disabledInfo}
          price={price}
          purchasable={purchasable}
          onOrderClick={handleOrderClick}
        />
      </>
    );
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

const enhancedBurgerBuilder = withErrorHandler(BurgerBuilder, orders);

const mapStateToProps = state => ({ burger: state.burger });

export default connect(
  mapStateToProps,
  { addIngredient, removeIngredient, initIngredients, initPurchase }
)(enhancedBurgerBuilder);
