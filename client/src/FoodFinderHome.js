import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

let productsList = ["apple", "banana", "carrot", "flour", "eggs", "milk"];

const cloudUrl = 'https://ardent-fusion-279020.wl.r.appspot.com/';
const localUrl = 'http://localhost:8081'; 

class FoodFinderHome extends React.Component {
    constructor (props) {
        super(props);
        this.state = { currentProduct : '', vendorMatches : {} };
        //currentProduct : '', vendorMatches = {} 
    }
    selectedProduct (productName) {
        console.log("INFO FORRRRRRR");
        this.setState ({
            currentProduct : productName
        });

    };

    render () {
        return (
            <div>
                <InputLabel id="demo-simple-select-label">Available Products</InputLabel>
        
                <Autocomplete
                    id="combo-box-demo"
                    options={productsList}
                    style={{ width: 300 }}
                    onChange={(event, newValue) => {
                        this.selectedProduct(newValue);
                      }}
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                />
                <InputLabel id="tester" >{this.state.currentProduct}</InputLabel>


                
            </div>
          );
    }

}

export default FoodFinderHome;
