import React, {Component} from 'react';
import Contacts from './components/contacts'

class App extends Component{

    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2cd60e70e23d1aac41f24a242c1e08f8&language=en-US')
        .then(res => res.json())
        .then((data) => {
            this.setState({contacts: data.results})
        })
        .catch(console.log)
    }

    render(){
        return(
            <Contacts contacts={this.state.contacts}/>
        );
    }
};

export default App;