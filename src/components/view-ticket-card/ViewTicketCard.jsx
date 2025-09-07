import React from "react";
import { Typography, Button } from "@mui/material";
import {
  CardRoot,
  Header,
  Surface,
  TicketWrapper,
  TicketImg,
  TicketLabel,
  Actions,
  TicketButton,
  TicketOverlay,
} from "./view-ticket-card.styles";

const noop = () => {};

const ViewTicketCard = ({
  title,
  subTitle,
  ticketImage,
  onViewTicket = noop,
  onShareTicket = noop,
  onPrintTicket = noop,
  onDownloadTicket = noop,
}) => {
  return (
    <div>
      <CardRoot>
        <Header>
          {title ? (
            <Typography
              variant="h6"
              color="#FFFFFF"
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                },
              }}
            >
              {title}
            </Typography>
          ) : null}
          {subTitle ? (
            <Typography
              variant="body2"
              color="#848484"
              sx={{
                fontWeight: 400,
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                },
              }}
            >
              {subTitle}
            </Typography>
          ) : null}
        </Header>

        <Surface>
          <TicketWrapper onClick={() => onViewTicket(ticketImage || "N/A")}>
            <TicketImg src="/src/assets/qr.png" alt="Ticket" />
            <TicketOverlay />
            <TicketLabel variant="button">View Tickets</TicketLabel>
          </TicketWrapper>

          <Actions>
            <TicketButton variant="outlined" onClick={onShareTicket}>
              Share
            </TicketButton>
            <TicketButton variant="outlined" onClick={onPrintTicket}>
              Print
            </TicketButton>
            <TicketButton variant="outlined" onClick={onDownloadTicket}>
              Download
            </TicketButton>
          </Actions>
        </Surface>
      </CardRoot>
    </div>
  );
};

export default ViewTicketCard;
