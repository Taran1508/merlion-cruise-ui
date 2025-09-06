import React from "react";
import PropTypes from "prop-types";
import {
  UploadCard,
  FileAvatar,
  FileName,
  RemoveBtn,
} from "./upload-section.styles";
import fileicon from "../../assets/images/fileicon.png";
import deleteicon from "../../assets/images/delete.png";

const UploadSection = ({ file, onRemove }) => {
  if (!file) return null;

  return (
    <UploadCard>
      <div
        style={{
          backgroundColor: "#171717",
          borderRadius: "16px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={fileicon}
          alt="File Icon"
          style={{ width: 24, height: 24, objectFit: "contain" }}
        />
      </div>

      <FileName title={file.name}>
        {file.name.length > 30 ? file.name.slice(0, 30) + "..." : file.name}
      </FileName>

      {onRemove && (
        <RemoveBtn onClick={onRemove}>
          <img
            src={deleteicon}
            alt="Delete"
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
        </RemoveBtn>
      )}
    </UploadCard>
  );
};

UploadSection.propTypes = {
  file: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
};

export default UploadSection;
