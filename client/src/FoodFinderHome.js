import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid, InputLabel, TextField, Container, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

let productsList = ["Apples", "Bananas", "Butter", "Bread", "Carrots", "Cheese", "Eggs", "Flour", "Ground Beef", "Lettuce", "Milk", "Orange Juice", "Pasta", "Rice", "Salt", "Sugar", "Spinach"];

const cloudUrl = 'https://server-dot-ardent-fusion-279020.wl.r.appspot.com/';
const localUrl = 'http://localhost:8081/'; 

class FoodFinderHome extends React.Component {
    constructor (props) {
        super(props);
        this.state = { currentProduct : "", vendorMatches : { }};
    }
    selectedProduct (productName) {
        this.setState ({
            currentProduct : productName
        });

        fetch(cloudUrl + 'find-product/' + productName)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
          this.setState({ vendorMatches: data })
        })
        .catch(console.log);
    };
    
    getVendorList (vendors) {
    if (!this.state.productName) {
    	return <InputLabel>Please select an item.</InputLabel>;
    }
    else if (Object.keys(vendors).length === 0) {
    	return <InputLabel>The item you have selected is currently out of stock at all vendors.</InputLabel>;
    }
    return (
    Object.keys(vendors).map((key, index) => (
		<ListItem>
		<ListItemIcon>
		  <ShoppingCartIcon />
		</ListItemIcon>
		<ListItemText primary={key} secondary={"Price: $" + vendors[key].price + ", Quantity: " + vendors[key].quantity} />
	      </ListItem>
	      )));
	 }

    render () {
        return (
            <Grid
		  container
		  direction="column"
		  justify="center"
		  alignItems="center"
		>
		<Typography variant="h2" gutterBottom>
		FoodFinder
	      </Typography>
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
            <List>
            {this.getVendorList(this.state.vendorMatches)}
            </List>
        
        </Grid>
          );
    }

}

export default FoodFinderHome;
