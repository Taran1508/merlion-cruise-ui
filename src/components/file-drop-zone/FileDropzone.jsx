import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import {
  Root,
  DropArea,
  CenterContent,
  Title,
  Subtitle,
} from "./file-dropzone.styles";
import fileicon from "../../assets/images/fileicon.png";

/**
 * FileDropzone
 *
 * Props:
 * - file: single File-like object (optional)
 * - onFilesAccepted: function(acceptedFiles: File[]) => void
 * - maxSize?: number (bytes) default 25MB
 *
 * This component only handles UI + drop behavior (emit files via callback).
 * Parent should manage the file state.
 */
export default function FileDropzone({
  file = null,
  onFilesAccepted,
  maxSize = 25 * 1024 * 1024,
}) {
  const accept = useMemo(
    () => ({
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    }),
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxSize,
    multiple: false, // ⬅ only one file allowed
    onDrop: (accepted) => {
      if (accepted && accepted.length > 0) {
        console.log("Uploaded file:", accepted[0]); // ⬅ log file
      }
      if (typeof onFilesAccepted === "function") {
        onFilesAccepted(accepted);
      }
    },
  });

  return (
    <Root elevation={0}>
      <DropArea
        direction="column"
        alignItems="center"
        spacing={2}
        {...getRootProps()}
        dragActive={isDragActive ? 1 : 0}
      >
        <CenterContent direction="column" spacing={1}>
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
          <Title>Click to Upload Or Drag and drop</Title>
          <Subtitle>File format Excel file (Max. File size: 25 MB)</Subtitle>
          <input {...getInputProps()} />
        </CenterContent>
      </DropArea>
    </Root>
  );
}

FileDropzone.propTypes = {
  file: PropTypes.object, // single file
  onFilesAccepted: PropTypes.func.isRequired,
  maxSize: PropTypes.number,
};
