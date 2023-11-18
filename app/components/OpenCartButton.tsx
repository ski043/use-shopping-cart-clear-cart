"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const OpenCartButton = () => {
  const { handleCartClick } = useShoppingCart();
  return <Button onClick={() => handleCartClick()}>Open Cart</Button>;
};

export default OpenCartButton;
