import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Typography,
} from "@mui/material";

// Status color mapping
const statusColors = {
  Accepted: { bg: "rgba(0,128,0,0.2)", color: "#00c853" },
  Declined: { bg: "rgba(128,0,0,0.2)", color: "#e53935" },
  Pending: { bg: "rgba(255,165,0,0.2)", color: "#ffa726" },
};

export const DisplayTable = ({ rows }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        bgcolor: "#171717", // Table background
        borderRadius: 2,
        overflowX: "auto",
      }}
    >
      <Table
        sx={{
          borderCollapse: "collapse",
          "& td, & th": { border: "none" }, // remove default MUI borders
        }}
      >
        {/* Table Head */}
        <TableHead>
          <TableRow sx={{ backgroundColor: "#202020", borderRadius: 10 }}>
            {["Name", "Mobile Number", "Status"].map((header) => (
              <TableCell
                key={header}
                sx={{
                  color: "#ccc",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                bgcolor: "#171717",
                "&:not(:last-child)": {
                  borderBottom: "1px solid rgba(255,255,255,0.1)", // Only between rows
                },
              }}
            >
              <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                {row.mobile}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Chip
                  label={row.status}
                  sx={{
                    bgcolor:
                      statusColors[row.status]?.bg || "rgba(255,255,255,0.1)",
                    color: statusColors[row.status]?.color || "#fff",
                    fontWeight: "bold",
                    borderRadius: 6,
                    px: 2,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
