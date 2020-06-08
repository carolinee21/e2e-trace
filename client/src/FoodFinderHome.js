import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

let productsList = ["apple", "banana", "carrot", "flour", "eggs", "milk"];

const cloudUrl = 'https://server-dot-ardent-fusion-279020.wl.r.appspot.com/';
const localUrl = 'http://localhost:8081/'; 

class FoodFinderHome extends React.Component {
    constructor (props) {
        super(props);
        this.state = { currentProduct : '', vendorMatches : {} };
        //currentProduct : '', vendorMatches = {} 
    }
    selectedProduct (productName) {
        this.setState ({
            currentProduct : productName
        });
        console.log("Trying...");
        // http://localhost:8081/find-product/
        // http://jsonplaceholder.typicode.com/users
        fetch('/server/find-product/' + productName)
        .then((res) => {
            console.log("im here");
            console.log(res);
            return res;
        })
        .then((res) => {return res})
        .then((data) => {
            console.log("hiiii");
            console.log(data);
          this.setState({ vendorMatches: data })
        })
        .catch(console.log);
        console.log("done?");
    };

    render () {
        return (
            <div
            >
                <Container style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center" }}>
                    <InputLabel id="demo-simple-select-label">Available Products</InputLabel>
            
                    <Autocomplete
                        id="combo-box-demo"
                        options={productsList}
                        style={{ width: 300,
                            justifyContent: "center",
                            alignItems: "center" }}
                        onChange={(event, newValue) => {
                            this.selectedProduct(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                    />
                    <InputLabel id="tester" >{this.state.currentProduct}</InputLabel>
                    <InputLabel id="tester" >{this.state.vendorMatches["Vendor A"]}</InputLabel>
                </Container>

                
            </div>
          );
    }

}

export default FoodFinderHome;
