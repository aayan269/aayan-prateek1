function Pagination({current,onChange,totalPage}) {
  const prev = <button data-testid="prev-page" disabled={current===1} onClick={()=>onChange(current-1)}>PREV</button>;
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = <button data-testid="next-page" disabled={current===totalPage} onClick={()=>onChange(current+1)}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPage}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
