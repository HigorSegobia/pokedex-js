import { connect } from 'react-redux'
import { getPokemons } from '../../actions/pokemon'
import Page from './cmp-page'

function mapStateToProps(state) {
  const { collection } = state.pokemons

  return {
    collection
  }
}

const mapDispatchToProps = {
  getPokemons
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)