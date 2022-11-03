import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { log } from "console";
import path from "path";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

import { client } from "../api/client";
import { alcoholFilterParam } from "../api/graphql/alcoholFilter";
import VodkaPage from "../pages/VodkaPage";

export default function FilterButtons () {
  const alcohols: string[] = ["All", "Vodka", "Gin", "Liqueur", "Rum"];

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<FaAngleRight />}
          >
            {isOpen ? "Close" : "Filter by liquor"}
          </MenuButton>
          <MenuList>

            {alcohols.map((alcohol) => (
                <MenuItem key={alcohol} as={Link} to={"/"+ alcohol}>
                {alcohol}    
                </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
