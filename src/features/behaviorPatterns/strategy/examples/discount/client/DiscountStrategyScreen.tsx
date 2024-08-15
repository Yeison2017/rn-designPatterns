import { StyleSheet, Text, View } from "react-native";

import { Paragraph, ScreenLayout, TitleAccordion } from "@/common/components";
import DataDiscountStrategy from "../data/dataDiscountStrategy";
import { useState } from "react";
import { ShoppingCart } from "../shoppingCart";
import { NoDiscountStrategy } from "../noDiscountStrategy";
import { PercentageDiscountStrategy } from "../percentageDiscountStrategy";
import { FixedAmountDiscountStrategy } from "../fixedAmountDiscountStrategy";

const DiscountStrategyScreen = () => {
  const data = new DataDiscountStrategy();

  const [price, setPrice] = useState("");
  const [discountType, setDiscountType] = useState("none");
  const [discountValue, setDiscountValue] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const calculateTotal = () => {
    const priceNumber = parseFloat(price);
    const discountValueNumber = parseFloat(discountValue);
    let cart = new ShoppingCart(new NoDiscountStrategy());

    if (discountType === "percentage") {
      cart.setStrategy(new PercentageDiscountStrategy(discountValueNumber));
    } else if (discountType === "fixed") {
      cart.setStrategy(new FixedAmountDiscountStrategy(discountValueNumber));
    }

    setTotal(cart.calculateTotal(priceNumber));
  };

  return (
    <ScreenLayout activateScrollView={true}>
      <TitleAccordion name="Descripción">
        <Paragraph name={data.descripcion} />
      </TitleAccordion>

      <TitleAccordion name="Ejemplo:">
        <Text>Ejemplo de uso de la clase DiscountStrategy</Text>
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default DiscountStrategyScreen;

const styles = StyleSheet.create({});
