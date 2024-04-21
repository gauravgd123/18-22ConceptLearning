import ContainerThree from "./components/ContainerThree";

const ContainerTwo = ({data,updateData})=>{
    return(
        <div>
            <p>This is Container two</p>
            <ContainerThree data = {data} updateData = {updateData} />
        </div>
    );

}
export default ContainerTwo;