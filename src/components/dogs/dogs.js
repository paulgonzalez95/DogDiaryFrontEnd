import React from 'react';
import GetAllDogs from './getalldogs.js';
import CreateDog from './createdog.js';


class Dogs extends React.Component{



      render() {
        return (

          <div>
         <CreateDog/>
         <GetAllDogs/>
          </div>
              );
         }
  }



export default Dogs;
