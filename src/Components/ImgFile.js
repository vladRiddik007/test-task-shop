import React from "react";
import { Box, createStyles, makeStyles } from "@material-ui/core";
import { ApiFileToBase64 } from "../utils/file";
import PhotoIcon from "@material-ui/icons/Photo";

const InputPhoto = ({ children, ...props }) => {
  return (
    <>
      <label htmlFor="upload-button">{children}</label>
      <input
        accept="image/*"
        id="upload-button"
        style={{ display: "none" }}
        type="file"
        name="product"
        {...props}
      />
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    loadPhoto: {
      cursor: 'pointer',
      background: 'gray',
      height: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      "& img": {
        cursor: "pointer",
        maxHeight: 250,
      },
    },
    deleteIcon: {
      position: "absolute",
      top: 5,
      right: 5,
    },
  })
);

export const ImgFile = ({ item, changeItem }) => {
  const classes = useStyles();

  const handleSetFormFile = async (event) => {
    const {
      target: { files },
    } = event;
    if (files.length) {
      changeItem({
        ...item,
        image: await ApiFileToBase64(files[0]),
      });
    }
  };
  return (
    <Box className={classes.loadPhoto}>
      <InputPhoto onChange={handleSetFormFile}>
        {item.image ? <img src={item.image} alt="product" /> : <PhotoIcon />}
      </InputPhoto>
    </Box>
  );
};
