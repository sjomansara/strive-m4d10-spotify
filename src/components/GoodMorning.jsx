import { Component } from "react"
import SmallCard from "./SmallCard";
import { Row } from "react-bootstrap"

export default class GoodMorning extends Component {
    constructor(props) {
        super(props)

        this.state = {data: undefined}
    }
    
    componentDidMount = async () => {
        try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/deezer/search?q=Madonna",
              {}
            );
      
            if (response.ok) {
              let jsonResponse = await response.json();
              let slicedResponse = jsonResponse.data.slice(-8)
              this.setState({data: slicedResponse})
              // this.setState({ movies: moviesLimitedToSix });
            } else {
              console.log("error");
            }
          } catch (error) {
            console.log(error);
          }
    }
    
    render() {
        return (
            <>
                <h2 className="text-white mt-5">Good Morning</h2>
                <Row>
                    {this.state.data && this.state.data.map(item => {
                        return <SmallCard title={item.title} image={item.album.cover} />
                    })}
                </Row>
            </>
        )
    }
}