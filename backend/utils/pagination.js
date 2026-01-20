const getPagination = (page = 1, limit = 10) => {
  const currentPage = Number(page) || 1;
  const itemsPerPage = Number(limit) || 10;
  const skip = (currentPage - 1) * itemsPerPage;

  return {
    page: currentPage,
    limit: itemsPerPage,
    skip,
  };
};

export { getPagination };
