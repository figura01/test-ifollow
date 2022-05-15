import CatItem from "./CatItem"
import LoadingSpinner from '../UI/LoadingSpinner'
import classes from './CatsList.module.css';

const CatsList = ({cats, loading, onShow}) => {
  if(loading) {
    return <div className="centered"><LoadingSpinner /></div>
  }
  
  return (
    <ul className={classes.list_cats}>
      {cats && cats.map((cat, i) => {
        return <CatItem key={i} {...cat} onShow={onShow} />
      })}
    </ul>
  )
}

export default CatsList