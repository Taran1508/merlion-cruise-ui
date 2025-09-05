import { useState } from "react";
import useResponsive from "../../hooks/UseResponsive";

import {
  InvitationCardContainer,
  SectionContainer,
  SectionTitle,
  HostDetailsCard,
  HostDataColumn,
  HostLabelText,
  HostValueText,
  EventDetailsCard,
  EventDetailsContent,
  EventDetailRow,
  EventDetailText,
  ButtonsContainer,
  AcceptButton,
  DeclineButton,
  IconWrapper,
  TicketSection,
  TicketImage,
  StatusButton,
  StatusText,
} from "./invitation-card.styles.jsx";

// SVG Icons from Figma
const CalendarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10H21M8 6V2M16 6V2M9.4 22H14.6C16.8402 22 17.9603 22 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C21 18.9603 21 17.8402 21 15.6V10.4C21 8.15979 21 7.03969 20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597C17.9603 4 16.8402 4 14.6 4H9.4C7.15979 4 6.03968 4 5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404C3 7.03969 3 8.15979 3 10.4V15.6C3 17.8402 3 18.9603 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C6.03968 22 7.15979 22 9.4 22Z"
      stroke="#4D4D4D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const TimerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4ZM12 4V1M18 6L19 5M10 1H14M12 9V13"
      stroke="#4D4D4D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z"
      stroke="#4D4D4D"
      strokeWidth="2"
    />
    <path
      d="M20 10C20 14.4183 14 22 12 22C10 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
      stroke="#4D4D4D"
      strokeWidth="2"
    />
  </svg>
);

const InvitationCard = ({ sections }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Internal status state management
  const [currentStatus, setCurrentStatus] = useState(
    sections.eventDetails?.status || "pending"
  );

  const handleAccept = () => {
    setCurrentStatus("accepted");
    if (sections.eventDetails?.onAccept) {
      sections.eventDetails.onAccept();
    }
  };

  const handleDecline = () => {
    setCurrentStatus("declined");
    if (sections.eventDetails?.onDecline) {
      sections.eventDetails.onDecline();
    }
  };

  const renderHostDetails = (invitedBy, data) => (
    <SectionContainer
      ismobile={isMobile}
      istablet={isTablet}
      isdesktop={isDesktop}
    >
      <SectionTitle
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        {invitedBy[1]}
      </SectionTitle>

      <HostDetailsCard
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        <HostDataColumn ismobile={isMobile}>
          {Object.entries(data).map(([key, value]) => (
            <HostLabelText key={`label-${key}`} ismobile={isMobile}>
              {String(value[0])}
            </HostLabelText>
          ))}
        </HostDataColumn>

        <HostDataColumn ismobile={isMobile}>
          {Object.entries(data).map(([key, value]) => (
            <HostValueText key={`value-${key}`} ismobile={isMobile}>
              {String(value[1])}
            </HostValueText>
          ))}
        </HostDataColumn>
      </HostDetailsCard>
    </SectionContainer>
  );

  const renderEventDetails = (eventDetails) => (
    <SectionContainer
      ismobile={isMobile}
      istablet={isTablet}
      isdesktop={isDesktop}
    >
      <SectionTitle
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        Event Details
      </SectionTitle>

      <EventDetailsCard
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        <EventDetailsContent
          ismobile={isMobile}
          istablet={isTablet}
          isdesktop={isDesktop}
        >
          {eventDetails.date && (
            <EventDetailRow>
              <IconWrapper>
                <CalendarIcon />
              </IconWrapper>
              <EventDetailText>{eventDetails.date}</EventDetailText>
            </EventDetailRow>
          )}

          {eventDetails.time && (
            <EventDetailRow>
              <IconWrapper>
                <TimerIcon />
              </IconWrapper>
              <EventDetailText>{eventDetails.time}</EventDetailText>
            </EventDetailRow>
          )}

          {eventDetails.location && (
            <EventDetailRow>
              <IconWrapper>
                <LocationIcon />
              </IconWrapper>
              <EventDetailText>{eventDetails.location}</EventDetailText>
            </EventDetailRow>
          )}
        </EventDetailsContent>

        {/* Show status button if status is accepted, declined, or completed */}
        {(currentStatus === "accepted" ||
          currentStatus === "declined" ||
          currentStatus === "completed") && (
          <StatusButton
            ismobile={isMobile}
            istablet={isTablet}
            isdesktop={isDesktop}
            status={currentStatus}
          >
            <StatusText status={currentStatus}>{currentStatus}</StatusText>
          </StatusButton>
        )}

        {/* Show Accept/Decline buttons only when status is pending */}
        {(!currentStatus || currentStatus === "pending") && (
          <ButtonsContainer
            ismobile={isMobile}
            istablet={isTablet}
            isdesktop={isDesktop}
          >
            <AcceptButton
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
              onClick={handleAccept}
            >
              Accept
            </AcceptButton>

            <DeclineButton
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
              onClick={handleDecline}
            >
              Decline
            </DeclineButton>
          </ButtonsContainer>
        )}
      </EventDetailsCard>
    </SectionContainer>
  );

  const renderTicketInformation = (ticketInfo) => (
    <SectionContainer
      ismobile={isMobile}
      istablet={isTablet}
      isdesktop={isDesktop}
    >
      <SectionTitle
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        Ticket Information
      </SectionTitle>

      <TicketSection
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        {ticketInfo.ticketImage && (
          <TicketImage
            src={ticketInfo.ticketImage}
            alt="Event Ticket"
            ismobile={isMobile}
            istablet={isTablet}
            isdesktop={isDesktop}
          />
        )}

        <ButtonsContainer
          ismobile={isMobile}
          istablet={isTablet}
          isdesktop={isDesktop}
        >
          {ticketInfo.onViewTicket && (
            <AcceptButton
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
              onClick={ticketInfo.onViewTicket}
            >
              View Ticket
            </AcceptButton>
          )}

          {ticketInfo.onDownloadTicket && (
            <DeclineButton
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
              onClick={ticketInfo.onDownloadTicket}
            >
              Download
            </DeclineButton>
          )}

          {ticketInfo.onPrintTicket && (
            <DeclineButton
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
              onClick={ticketInfo.onPrintTicket}
            >
              Print
            </DeclineButton>
          )}
        </ButtonsContainer>
      </TicketSection>
    </SectionContainer>
  );

  return (
    <InvitationCardContainer
      ismobile={isMobile}
      istablet={isTablet}
      isdesktop={isDesktop}
    >
      {sections.invitedBy &&
        sections.data &&
        renderHostDetails(sections.invitedBy, sections.data)}

      {sections.eventDetails && renderEventDetails(sections.eventDetails)}

      {sections.ticketInformation &&
        renderTicketInformation(sections.ticketInformation)}
    </InvitationCardContainer>
  );
};

export default InvitationCard;
