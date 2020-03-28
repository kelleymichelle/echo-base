import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = { term: "" }

    onInputChange = (event) => {
        // console.log(event.target.value)
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: ""
        })
        //make sure to call callback from parent component
        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>These are not the droids I'm looking for... </label>
                        <input
                        style={{minWidth: '300px'}} 
                        type="text" 
                        value={this.state.term} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;