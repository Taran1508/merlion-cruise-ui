import React from "react";
import PropTypes from "prop-types";
import { Paper, Stack, Typography } from "@mui/material";
import {
  Root,
  HeaderBar,
  ContentWrap,
  SideCol,
  TimelineWrap,
  LineTrack,
  DotIconLeft,
  DotIconRight,
  DurationPill,
  StopsText,
  DateLine,
  LocationLine,
} from "./journey-info.styles";

const JourneyInfo = ({ title, departure, destination, duration }) => {
  return (
    <Root component={Paper} elevation={0}>
      {/* Header */}
      <HeaderBar>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "24px",
            },
          }}
        >
          {title}
        </Typography>
      </HeaderBar>

      {/* Content */}
      <ContentWrap direction="row">
        {/* Left: Depart */}
        <SideCol>
          <Typography
            variant="caption"
            sx={{
              color: "#848484",
              fontWeight: 500,
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
            }}
          >
            {departure?.label ?? "Depart"}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "18px", // mobile
                  sm: "20px", // tablets
                  md: "24px", // desktop/laptop
                },
              }}
            >
              {destination?.time}
            </Typography>
          </Stack>

          <DateLine variant="body2" sx={{ color: "#fff" }}>
            {departure?.date}
          </DateLine>
          <LocationLine variant="caption" sx={{ color: "#848484" }}>
            {departure?.location}
          </LocationLine>
        </SideCol>

        {/* Middle: timeline */}
        <TimelineWrap>
          <LineTrack>
            <DotIconLeft />
            <DotIconRight />
            <DurationPill
              label={duration?.label}
              size="small"
              variant="filled"
            />
          </LineTrack>
          <StopsText variant="caption">{duration?.stopsLabel}</StopsText>
        </TimelineWrap>

        {/* Right: Arrive */}
        <SideCol>
          <Typography
            variant="caption"
            sx={{
              color: "#848484",
              fontWeight: 500,
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
            }}
          >
            {destination?.label ?? "Arrive"}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "24px",
                },
              }}
            >
              {destination?.time}
            </Typography>
          </Stack>

          <DateLine variant="body2" sx={{ color: "#fff" }} textAlign="right">
            {destination?.date}
          </DateLine>
          <LocationLine
            variant="caption"
            sx={{ color: "#848484" }}
            textAlign="right"
          >
            {destination?.location}
          </LocationLine>
        </SideCol>
      </ContentWrap>
    </Root>
  );
};

JourneyInfo.propTypes = {
  title: PropTypes.string.isRequired,
  departure: PropTypes.shape({
    label: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  destination: PropTypes.shape({
    label: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  duration: PropTypes.shape({
    label: PropTypes.string,
    stopsLabel: PropTypes.string,
  }).isRequired,
};

export default JourneyInfo;
