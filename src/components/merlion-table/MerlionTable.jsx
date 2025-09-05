/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  InputAdornment,
  MenuItem,
  FormControl,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Root,
  HeaderBar,
  Title,
  SearchGroup,
  StyledTextField,
  YearSelect,
  StyledTableContainer,
  HeaderCell,
  BodyCell,
  StyledRow,
  ActionButton,
  PaginationWrapper,
  SearchIcon,
  CalendarIcon,
  ArrowButton,
  PaginationContainer,
  PageIndicator,
  PageButton,
  PaginationNumbers,
  Parent,
} from "./merlion-table.styles";
import useResponsive from "@/hooks/UseResponsive";

const MerlionTable = ({
  title,
  columns,
  data,
  onClickRow = () => {},
  onClickButton = () => {},
  hidePagination = false,
  hideSearchbar = false,
  onChangePage = () => {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(6);
  const [selectedYear, setSelectedYear] = useState("2025");
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesSearch = Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
      const yearMatch =
        typeof row.dateTime === "string"
          ? row.dateTime.match(/\b\d{4}\b/)?.[0]
          : undefined;
      const matchesYear = !selectedYear || yearMatch === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [data, searchTerm, selectedYear]);

  const paginatedData = hidePagination
    ? filteredData
    : filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
    onChangePage(page, rowsPerPage);
  };

  const handleRowClick = (rowData, column) => {
    onClickRow(rowData, column);
  };

  const handleButtonClick = (buttonValue, rowData) => {
    onClickButton(buttonValue, rowData);
  };

  return (
    <Parent ismobile={isMobile} istablet={isTablet} isdesktop={isDesktop}>
      <HeaderBar>
        <Title variant="h4">{title}</Title>

        {!hideSearchbar && (
          <SearchGroup>
            <StyledTextField
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl>
              <YearSelect
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <CalendarIcon />
                  </InputAdornment>
                }
                IconComponent={KeyboardArrowDown}
              >
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
                <MenuItem value="2025">2025</MenuItem>
              </YearSelect>
            </FormControl>
          </SearchGroup>
        )}
      </HeaderBar>
      <Root ismobile={isMobile} istablet={isTablet}>
        <StyledTableContainer>
          <Table>
            <TableHead>
              <StyledRow>
                {columns.map((column) => (
                  <HeaderCell
                    key={column.id}
                    align={column.align || "left"}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </HeaderCell>
                ))}
                <HeaderCell />
              </StyledRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <StyledRow
                  key={index}
                  onClick={() => handleRowClick(row, columns[0])}
                >
                  {columns.map((column) => (
                    <BodyCell key={column.id} align={column.align || "left"}>
                      {column.format
                        ? column.format(row[column.id])
                        : row[column.id]}
                    </BodyCell>
                  ))}
                  <BodyCell>
                    <ActionButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleButtonClick("View Details", row);
                      }}
                    >
                      View Details
                    </ActionButton>
                  </BodyCell>
                </StyledRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>

        {!hidePagination && (
          <PaginationWrapper>
            <PageIndicator>{totalPages}</PageIndicator>

            <PaginationContainer>
              <ArrowButton
                onClick={() =>
                  handlePageChange(null, Math.max(1, currentPage - 1))
                }
                disabled={currentPage <= 1}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M9.271 3.125L4.896 7.5L9.271 11.875"
                    stroke="white"
                    strokeWidth="1.59672"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ArrowButton>

              <PaginationNumbers>
                {/* Show first 5 pages or all pages if less than 5 */}
                {Array.from(
                  { length: Math.min(totalPages, 5) },
                  (_, i) => i + 1
                ).map((pageNum) => (
                  <PageButton
                    key={pageNum}
                    selected={pageNum === currentPage}
                    onClick={() => handlePageChange(null, pageNum)}
                  >
                    {pageNum}
                  </PageButton>
                ))}

                {/* Show ellipsis if there are more than 5 pages */}
                {totalPages > 5 && (
                  <PageButton style={{ fontSize: "14px" }}>...</PageButton>
                )}

                {/* Show last page if there are more than 5 pages */}
                {totalPages > 5 && (
                  <PageButton
                    selected={currentPage === totalPages}
                    onClick={() => handlePageChange(null, totalPages)}
                  >
                    {totalPages}
                  </PageButton>
                )}
              </PaginationNumbers>

              <ArrowButton
                onClick={() =>
                  handlePageChange(null, Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage >= totalPages}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.729 3.125L10.104 7.5L5.729 11.875"
                    stroke="white"
                    strokeWidth="1.59672"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ArrowButton>
            </PaginationContainer>
          </PaginationWrapper>
        )}
      </Root>
    </Parent>
  );
};

export default MerlionTable;
