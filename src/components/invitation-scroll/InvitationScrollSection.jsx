import React from "react";
import PropTypes from "prop-types";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";

import {
  InvitationBackBar,
  InvitationHeroRoot,
  InvitationHeroBackgroundImage,
  InvitationContentWrapper,
  InvitationHeroTitle,
  InvitationHeroSubtitle,
} from "./invitation-scroll-section.styles";

const InvitationScrollSection = ({ title, subTitle, onBack, images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true, // loop from last → first smoothly
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds per slide
    speed: 1000, // transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: "ease-in-out", // smooth effect
  };

  const breadcrumbs = [
    { label: "Dashboard" },
    { label: "My Invitations" },
    { label: "Step Into Merlion Club" },
  ];
  return (
    <InvitationHeroRoot component="section" aria-label="invitation scroll hero">
      {/* Background images with react-slick */}
      <Slider {...settings}>
        {images.map((src, idx) => (
          <InvitationHeroBackgroundImage
            key={idx}
            src={src}
            alt={`invitation-scroll-img-${idx}`}
            loading="lazy"
          />
        ))}
      </Slider>

      {/* Overlay back bar */}
      <InvitationBackBar>
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.label}>
            <Typography
              onClick={item.onClick}
              variant="body2"
              sx={{ fontWeight: 500, fontSize: "16px", cursor: "pointer" }}
            >
              {item.label}
            </Typography>
            {index < breadcrumbs.length - 1 && (
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: "16px", mx: 1 }}
              >
                /
              </Typography>
            )}
          </React.Fragment>
        ))}
      </InvitationBackBar>

      {/* Titles */}
      <InvitationContentWrapper>
        <InvitationHeroTitle variant="h5">{title}</InvitationHeroTitle>
        {subTitle ? (
          <InvitationHeroSubtitle variant="body2">
            {subTitle}
          </InvitationHeroSubtitle>
        ) : null}
      </InvitationContentWrapper>
    </InvitationHeroRoot>
  );
};

InvitationScrollSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onBack: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

InvitationScrollSection.defaultProps = {
  subTitle: "",
  onBack: () => window.history.back(),
};

export default InvitationScrollSection;
