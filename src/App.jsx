import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Container from "./components/Container";
import { useState } from "react";
function App() {
  
  // let FoodItems=["Dal","Rice","Green Vegetables","Fruits","Lentils"];
  // return (
  //   <Container>
  //      <h1>Healthy items</h1>
  //     {/* // <ul class="list-group">
  //     //   <li class="list-group-item">Dal</li>
  //     //   <li class="list-group-item">Rice</li>
  //     //   <li class="list-group-item">Green Vegetables</li>
  //     //   <li class="list-group-item">Fruits</li>
  //     //   <li class="list-group-item">Lentils</li>
  //     // </ul>    */}
  //     <ul className="list-group list1">
  //     {FoodItems.map((item)=>(
  //         <li className="list-group-item list2 ">{item}</li>  
  //     ))}
  //     </ul>

  //   </Container>
  //)
    const [data,setData] = useState["Prop Drilling"];

    const updateData = (newData) =>{
      setData(newData);                          //function updataData(newData){}

    }
    retrun (
      <div>
        <h1>Prop Drilling Example</h1>
        <Container data = {data} updateData={updateData} />;
      </div>
    );
};

export default App;
