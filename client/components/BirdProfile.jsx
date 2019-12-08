import React from 'react'
import BirdHeader from './BirdHeader'
// import FoundBtn from './FoundBtn'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Link } from 'react-router-dom'
import { Segment, Grid, Button } from 'semantic-ui-react'
import found from '../api/found'

class BirdProfile extends React.Component {
  handleClick = (id) => {
    found(id)
  }

  toggleLink = (bird) => (
    bird.found ? `/profile/${bird.bird_id}` : '/'
  )

  render () {
    const { id } = this.props.match.params
    const bird = this.props.birds.find(bird => bird.bird_id === Number(id))
    return (
      <React.Fragment>

        <Segment vertical >
          <Grid container stackable className='birdProfileWrapper' >
            <Grid.Row>
              <BirdHeader />
              <div>
                <img src={bird.image} alt={bird.name} width="412px" height="auto"/>
              </div>
              <BirdProfileTitle name={bird.name}/>
              <Link to={this.toggleLink(bird)}>
                <Button onClick= {() => this.handleClick(id)} style = {{ marginBottom: '10px' }} size='massive' className='foundBtnStyle' >POKAI!</Button>
              </Link>
              <Link to={`/profile/${id}/info`}>
                <BirdInfoBtn />
              </Link>
              <Link to="/">
                <BackBtn />
              </Link>
            </Grid.Row>
          </Grid>

        </Segment>

      </React.Fragment>
    )
  }
}

export default BirdProfile

// style={{ padding: '5px 5px' }}
// verticalAlign='middle'
