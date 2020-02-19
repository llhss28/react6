import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            text: "",
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            text: event.target.value,
        })
    }
    save(e){
        e.preventDefault();
        let list = [...this.state.list];
        list.push(this.state.text)
        this.setState({list})
        this.setState({text: ""})
    }
    render(){
        return(
            <form>
                <input type = "text" name = "text" placeholder= "text" onChange = {this.handleChange} />
                <button onClick = {e => this.save(e)}>Submit</button>
                <h1>{this.state.text}</h1>
                <ol>
                    {this.state.list.map(function(item,index){
                        return <li key={item+index}>{item}</li>
                    })}
                </ol>
            </form>
        )
    }
}
export default App