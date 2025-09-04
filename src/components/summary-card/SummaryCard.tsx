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

interface SummaryItem {
  [key: string]: any;
}

interface SummaryCardProps {
  title: string;
  summary: SummaryItem[];
  highlightedProperties?: string[];
  align?: "left" | "right";
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  summary,
  highlightedProperties = [],
  align = "left",
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const formatLabel = (key: string): string => {
    // Convert camelCase to readable format
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const renderSummaryContent = () => {
    const content: React.ReactNode[] = [];

    summary.forEach((item, itemIndex) => {
      const entries = Object.entries(item);

      entries.forEach(([key, value], entryIndex) => {
        // Handle divider keys
        if (key.startsWith("divider_")) {
          content.push(
            <StyledDivider key={`divider-${itemIndex}-${entryIndex}`} />
          );
          return;
        }

        const isHighlighted = highlightedProperties.includes(key);
        const label = formatLabel(key);

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
                align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {label}
              </LabelText>
              <ValueText
                ishighlighted={true}
                align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {String(value)}
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
                align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {label}
              </LabelText>
              <ValueText
                align={align}
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                {String(value)}
              </ValueText>
            </DataRow>
          );
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
