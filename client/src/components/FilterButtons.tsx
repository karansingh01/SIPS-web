import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FilterButtons() {
  const alcohols: string[] = ["All", "Vodka", "Gin", "Liqueur", "Rum"];

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<FaAngleRight />}
            maxWidth={"160px"}
            margin={0}
            justifycontent={"flex-end"}
          >
            {isOpen ? "Close" : "Filter by liquor"}
          </MenuButton>
          <MenuList>
            {alcohols.map((alcohol) => (
              <MenuItem key={alcohol} as={Link} to={"/" + alcohol}>
                {alcohol}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
