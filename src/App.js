import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';



 export default class App extends Component {
  constructor (props){
    super(props)
    this.state={
      // settin state person
      person:{
      fullName:'Michael Jackson',
      bio:' Michael Jackson, né le 29 août 1958  est un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain',
      imgSrc:'https://biografieonline.it/img/bio/m/Michael_Jackson.jpg',
      profession:'Singer',
      show:true},
      intervalId: null,
      timeSinceMount: 0,
    }
  }
  // button state
  show=()=>{
    this.setState({show:!this.state.show})
  }
  // componentdidmount time
  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState((prevState) => ({
          timeSinceMount: prevState.timeSinceMount + 1,
        }));
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person,timeSinceMount } = this.state;
    return (
          <div className='App'>
            <h1 style={{color:'#FFFFFF',marginTop:'100px',marginBottom:'20px'}}> </h1> {this.state.show &&
            <Card style={{ width: '18rem',margin:'20px'}}>
      <Card.Img  src={person.imgSrc}/>
      <Card.Body>
      <Card.Title>{person.fullName}</Card.Title>
      <Card.Text>
          {person.bio}  {person.profession}
        </Card.Text>
      </Card.Body>
       </Card>}
       <Button  onClick={this.show} style={{marginTop:'5px'}}>Show profile</Button>
    <p style={{color:'#FFFFFF'}}>Time since mount: {timeSinceMount} seconds</p>
    </div>
    )

            }}
