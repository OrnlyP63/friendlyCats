import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/Error";
import Header from "../components/Header";
import './App.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            cats:[],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => this.setState({cats: users}));
    }
    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {cats, searchfield} = this.state;
        const filterdedCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!cats.length){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="tc">
                    <Header />
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterdedCats}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;