import { useState, useEffect, useCallback } from "react";

const usePagination = (data, itemsPerPage, initialFilterKey) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [filterKey, setFilter] = useState(initialFilterKey);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    // Aplicar el filtro según el tipo especificado
    const sortedData = [...data].sort((a, b) => {
      const valueA = a[filterKey];
      const valueB = b[filterKey];

      if (typeof valueA === "string" && typeof valueB === "string") {
        // Ordenar como texto si ambos son cadenas
        return valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        // Ordenar como número si ambos son números
        return valueA - valueB;
      }
      // Agrega más lógica de filtro según tus necesidades
      return 0;
    });

    setFilteredData(sortedData);
    setCurrentPage(1);
  }, [data, filterKey]);

  useEffect(() => {
    loadItemsPage();
  }, [currentPage, filteredData, itemsPerPage]);

  const totalPages = useCallback(
    () => Math.ceil(filteredData.length / itemsPerPage),
    [filteredData, itemsPerPage]
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const loadItemsPage = useCallback(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentPageData(filteredData.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, filteredData, itemsPerPage]);

  const onPrevPage = () => {
    paginate(currentPage - 1);
  };

  const onNextPage = () => {
    paginate(currentPage + 1);
  };

  return {
    currentPage,
    totalPages,
    paginate,
    currentPageData,
    setFilter,
    onPrevPage,
    onNextPage,
  };
};

export default usePagination;
