import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const NavLink = ({ pageName, handler }) => {
  return (
    <TouchableOpacity onPress={() => handler(pageName)}>
      <Text>go to {pageName.toLowerCase()} page</Text>
    </TouchableOpacity>
  );
};

NavLink.propTypes = {
  pageName: PropTypes.string,
  handler: PropTypes.func,
};

export default NavLink;
