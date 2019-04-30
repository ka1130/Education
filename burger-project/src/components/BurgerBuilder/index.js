import React, { useState } from "react";
import { connect } from "react-redux";
import { addIngredient, removeIngredient } from "redux/actions";
import Burger from "components/Burger";
import BuildControls from "components/Burger/BuildControls";
import Modal from "components/UI/Modal";
import Spinner from "components/UI/Spinner";
import OrderSummary from "components/Burger/OrderSummary";
import withErrorHandler from "components/hoc/withErrorHandler";
import orders from "apis/orders";

const BurgerBuilder = props => {
  const { ingredients, price } = props.burger;
  const [purchasing, setPurchasing] = useState(false);
  let loading = false;

  const purchasable =
    Object.values(ingredients).reduce((el, acc) => el + acc) > 0;

  const handleOrderClick = () => setPurchasing(true);

  const handleModalClose = () => setPurchasing(false);

  const handlePurchaseContinue = () => {
    props.history.push("/checkout", { ingredients, price });
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
            onIngredientAdd={props.addIngredient}
            onIngredientRemove={props.removeIngredient}
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

const enhancedBurgerBuilder = withErrorHandler(BurgerBuilder, orders);

const mapStateToProps = state => ({ burger: state.burger });

export default connect(
  mapStateToProps,
  { addIngredient, removeIngredient }
)(enhancedBurgerBuilder);
