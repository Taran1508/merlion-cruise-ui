/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  SummaryCardContainer,
  CardTitle,
  CardContent,
  DataColumn,
  DataRow,
  LabelText,
  ValueText,
  StyledDivider,
  HighlightedRow,
} from "./summary-card.styles";
import useResponsive from "@/hooks/UseResponsive";

const SummaryCard = ({
  title,
  summary,
  highlightedProperties = [],
  align = "left",
  divider,
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const renderSummaryContent = () => {
    const content = [];

    summary.forEach((item, itemIndex) => {
      const entries = Object.entries(item);

      entries.forEach(([key, value], entryIndex) => {
        const isHighlighted = highlightedProperties.includes(key);

        if (isHighlighted) {
          // Render highlighted items in a special row (like totals)
          content.push(
            <HighlightedRow
              key={`highlighted-${itemIndex}-${entryIndex}`}
              align={align}
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
            >
              <LabelText
                align={"left"}
                ismobile={isMobile}
                istablet={isTablet}
                ishighlighted={true}
                isdesktop={isDesktop}
              >
                {String(value[0])}
              </LabelText>
              <ValueText
                ishighlighted={true}
                align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {String(value[1])}
              </ValueText>
            </HighlightedRow>
          );
        } else {
          // Regular data row
          content.push(
            <DataRow
              key={`data-${itemIndex}-${entryIndex}`}
              align={align}
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
            >
              <LabelText
                // align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {String(value[0])}
              </LabelText>
              <ValueText
                align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {String(value[1])}
              </ValueText>
            </DataRow>
          );
          // Check if the key matches the keys in the divider prop
          if (divider?.includes(key)) {
            // If it does, push a divider after this row
            const dividerKey = `divider-${itemIndex}-${entryIndex}`;
            content.push(<StyledDivider key={dividerKey} />);
          }
        }
      });
    });

    return content;
  };

  return (
    <SummaryCardContainer
      ismobile={isMobile}
      istablet={isTablet}
      isdesktop={isDesktop}
    >
      <CardTitle ismobile={isMobile} istablet={isTablet} isdesktop={isDesktop}>
        {title}
      </CardTitle>

      <CardContent
        align={align}
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        <DataColumn
          align={align}
          ismobile={isMobile}
          istablet={isTablet}
          isdesktop={isDesktop}
        >
          {renderSummaryContent()}
        </DataColumn>
      </CardContent>
    </SummaryCardContainer>
  );
};

export default SummaryCard;
