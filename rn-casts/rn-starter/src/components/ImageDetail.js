import React from "react";
import { Image, View, Text } from "react-native";
import PropTypes from "prop-types";

const ImageDetail = ({ title, src }) => {
  return (
    <View>
      <Image source={src} />
      <Text>{title}</Text>
    </View>
  );
};

ImageDetail.propTypes = {
  title: PropTypes.string,
  src: PropTypes.any,
};

export default ImageDetail;
