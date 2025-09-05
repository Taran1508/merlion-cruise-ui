import React from "react";
import PropTypes from "prop-types";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import {
  BackBar,
  HeroRoot,
  HeroBackgroundWrapper,
  HeroBackgroundTrack,
  HeroBackgroundImage,
  ContentWrapper,
  HeroTitle,
  HeroSubtitle,
} from "./auto-scroll-section.styles";

const AutoScrollSection = ({ title, subTitle, onBack }) => {
  const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"];

  return (
    <HeroRoot component="section" aria-label="auto scroll hero">
      {/* Background images */}
      <HeroBackgroundWrapper>
        <HeroBackgroundTrack>
          {images.concat(images).map((src, idx) => (
            <HeroBackgroundImage
              key={idx}
              src={src}
              alt={`scroll-img-${idx}`}
              loading="lazy"
            />
          ))}
        </HeroBackgroundTrack>
      </HeroBackgroundWrapper>

      {/* Overlay back bar on image */}
      <BackBar onClick={onBack}>
        <IconButton sx={{ color: "white", p: 0 }}>
          <ArrowBackIosNewIcon sx={{ width: 24, height: 24 }} />
        </IconButton>
        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "16px" }}>
          Back
        </Typography>
      </BackBar>

      {/* Titles */}
      <ContentWrapper>
        <HeroTitle variant="h5">{title}</HeroTitle>
        {subTitle ? (
          <HeroSubtitle variant="body2">{subTitle}</HeroSubtitle>
        ) : null}
      </ContentWrapper>
    </HeroRoot>
  );
};

AutoScrollSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onBack: PropTypes.func,
};

AutoScrollSection.defaultProps = {
  subTitle: "",
  onBack: () => window.history.back(),
};

export default AutoScrollSection;
