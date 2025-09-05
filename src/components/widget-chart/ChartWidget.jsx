import React from "react";
import PropTypes from "prop-types";
import {
  WidgetContainer,
  WidgetTitle,
  ChartWrapper,
  Donut,
  DonutSlice,
  ChartCenterText,
  Legend,
  LegendItem,
  LegendDot,
  LegendLabel,
  LegendValue,
  ChartContainer,
} from "./chart-widget.styles";

const ChartWidget = ({ title, data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Colors based on label
  const labelColors = {
    Accepted: "#82ED83",
    Pending: "#EDD482",
    Declined: "#FF7979",
  };

  const gapDeg = 5;
  let currentAngle = 0;

  // Calculate slices with gaps
  const slices = data.map((item) => {
    const percentage = (item.value / total) * 360;
    const slice = {
      ...item,
      color: labelColors[item.label] || "#ccc",
      start: currentAngle,
      end: currentAngle + percentage - gapDeg, // shrink for gap
    };
    currentAngle += percentage;
    return slice;
  });

  // Build gradient with gaps
  const gradient = slices
    .map(
      (slice) =>
        `${slice.color} ${slice.start}deg ${slice.end}deg, transparent ${
          slice.end
        }deg ${slice.end + gapDeg}deg`
    )
    .join(", ");

  return (
    <WidgetContainer>
      <WidgetTitle>{title}</WidgetTitle>
      <ChartContainer>
        <ChartWrapper>
          <Donut style={{ background: `conic-gradient(${gradient})` }}>
            <DonutSlice />
          </Donut>
          <ChartCenterText>
            <div style={{ fontWeight: 400, fontSize: "14px" }}>
              Total Invitations
            </div>
            <div style={{ fontWeight: 700, fontSize: "24px" }}>{total}</div>
          </ChartCenterText>
        </ChartWrapper>

        <Legend>
          {data.map((item, idx) => (
            <LegendItem key={idx}>
              <LegendDot style={{ backgroundColor: labelColors[item.label] }} />
              <LegendLabel>{item.label}</LegendLabel>
              <LegendValue>{item.value}</LegendValue>
            </LegendItem>
          ))}
        </Legend>
      </ChartContainer>
    </WidgetContainer>
  );
};

ChartWidget.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ChartWidget;
