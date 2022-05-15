import Card from '../UI/Card';
import classes from './CatItem.module.css'
const CatItem = ({breed, coat, country, origin, pattern, onShow}) => {

  return (
    <li className={classes.cat_item}>
      <Card>
        <div className={classes.content} onClick={onShow}>
          <h3 className={classes.breed}>{breed}</h3>
          <p className={classes.entrie}><span>Coat:</span> {coat}</p>
          <p className={classes.entrie}><span>Country:</span> {country}</p>
          <p className={classes.entrie}><span>Origin:</span> {origin}</p>
          <p className={classes.entrie}><span>Pattern:</span> {pattern}</p> 
        </div>
      </Card>
    </li>
  )
}

export default CatItem