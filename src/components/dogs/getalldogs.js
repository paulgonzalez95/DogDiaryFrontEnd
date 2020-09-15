import React from 'react';

class GetAllDogs extends React.Component{



    state = {

     loading : true,
     dogs: null,

    };


    //has the componenet rendered at least once

     async componentDidMount() {

     //const url = "https://api.randomuser.me";
     const url = "http://localhost:5000/alldogs";
     const response = await fetch(url);
     const data = await response.json();
     console.log(data);
     //console.log(data.results[0]);
     this.setState({dogs: data, loading: false});

    }


      render() {
        return (
        <div>
        {this.state.loading || !this.state.dogs ? (
          <div> loading... </div>
        ): (

    //ROOT Div (required) is here
    //map iterates through each item in the state . dog is just a variable name you create
    //Warning: Each child in a list should have a unique "key" prop. if you dont have one you can use the index of the array (bad practice)

            <div>
                {this.state.dogs.map( dog  => (
                <div key = {dog.dogowner_id }>
                First Name: {dog.firstname}
                &nbsp;
                Last Name: {dog.lastname}


                </div>
                            ))}

             </div>
           )}
          </div>
              );
         }
  }

export default GetAllDogs;
