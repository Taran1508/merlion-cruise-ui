import React from "react";
import PropTypes from "prop-types";
import { Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import {
  BackBar,
  HeroRoot,
  HeroBackground,
  ContentWrapper,
  HeroTitle,
  HeroSubtitle,
} from "./cruise-hero-section.styles";

const CruiseHeroSection = ({ image, title, subTitle, onBack }) => {
  return (
    <>
      {/* Back Bar */}
      <BackBar onClick={onBack}>
        <IconButton sx={{ color: "white", p: 0 }}>
          <ArrowBackIosNewIcon sx={{ width: 15, height: 15 }} />
        </IconButton>
        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "16px" }}>
          Back
        </Typography>
      </BackBar>

      {/* Hero Section */}
      <HeroRoot component="section" aria-label="cruise hero">
        <HeroBackground
          src={image}
          alt={title || "Cruise image"}
          loading="lazy"
        />

        <ContentWrapper>
          <HeroTitle variant="h5">{title}</HeroTitle>
          {subTitle ? (
            <HeroSubtitle variant="body2">{subTitle}</HeroSubtitle>
          ) : null}
        </ContentWrapper>
      </HeroRoot>
    </>
  );
};

CruiseHeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onBack: PropTypes.func,
};

CruiseHeroSection.defaultProps = {
  subTitle: "",
  onBack: () => window.history.back(),
};

export default CruiseHeroSection;
