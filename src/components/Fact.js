import Modal from '../UI/Modal/Modal'

const Fact = (props) => {
  return <Modal  onClose={props.onClose}>
    <div>
      <h3>Random Fact</h3>
      <h4>Did you know ?</h4>
      <p>{props.fact.fact}</p>
    </div>
  </Modal>
}

export default Fact