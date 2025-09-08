import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Root,
  Content,
  TitleStack,
  TitleText,
  RemoveButton,
  ApplyButton,
  SubText,
  PromoImg,
} from "./promo-card.styles";
import promoImage from "../../assets/promo.png";

const PromoCard = ({ title, onClickRemove, onClickApply }) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    onClickApply();
  };

  const handleRemove = () => {
    setApplied(false);
    onClickRemove();
  };

  return (
    <Root elevation={0}>
      <Content direction="row" alignItems="center">
        {/* left badge/icon */}
        <PromoImg src={promoImage} alt="Promo" />

        {/* middle text */}
        <TitleStack direction="column" justifyContent="center">
          <TitleText variant="body1">{title}</TitleText>
          <SubText variant="caption" aria-hidden="true" />
        </TitleStack>

        {applied ? (
          <RemoveButton onClick={handleRemove} aria-label="Remove promo">
            Remove
          </RemoveButton>
        ) : (
          <ApplyButton onClick={handleApply} aria-label="Apply promo">
            Apply
          </ApplyButton>
        )}
      </Content>
    </Root>
  );
};

PromoCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func,
  onClickApply: PropTypes.func,
};

PromoCard.defaultProps = {
  onClickRemove: () => {},
  onClickApply: () => {},
};

export default PromoCard;
