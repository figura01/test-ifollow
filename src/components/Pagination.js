import classes from './Pagination.module.css'

const Pagination = ({currentPage, lastPage, paginate}) => {
  const pageNumbers = []
  for(let i = 1; i <= lastPage; i++ ) {
    pageNumbers.push(i)
  }

  return <nav className={classes.pagination}>
    <ul className={classes.pagination_list}>
      {pageNumbers.map(number => (
        <li key={number} className={classes.page_item}>
          <a href="!#" onClick={(e) => paginate(e,number)} className={currentPage === number ? `${classes.page_link} ${classes.active}` : `${classes.page_link}`}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
}

export default Pagination