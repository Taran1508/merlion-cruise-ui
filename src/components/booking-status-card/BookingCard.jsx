import {
  StatusCardContainer,
  StatusTitle,
  StatusSubtitle,
  ExternalNote,
  CardWithNoteContainer,
} from "./booking-status-card.styles.jsx";
import useResponsive from "@/hooks/UseResponsive.jsx";

const BookingStatusCard = ({ title, subTitle, status, note }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <CardWithNoteContainer
      ismobile={isMobile}
      istablet={isTablet}
      isdesktop={isDesktop}
    >
      <StatusCardContainer
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
        status={status}
      >
        <StatusTitle
          ismobile={isMobile}
          istablet={isTablet}
          isdesktop={isDesktop}
          status={status}
          component="h2"
        >
          {title}
        </StatusTitle>

        <StatusSubtitle
          ismobile={isMobile}
          istablet={isTablet}
          isdesktop={isDesktop}
          status={status}
          component="p"
        >
          {subTitle}
        </StatusSubtitle>
      </StatusCardContainer>

      {note && (
        <ExternalNote
          ismobile={isMobile}
          istablet={isTablet}
          isdesktop={isDesktop}
          component="p"
        >
          Note: {note}
        </ExternalNote>
      )}
    </CardWithNoteContainer>
  );
};

export default BookingStatusCard;
