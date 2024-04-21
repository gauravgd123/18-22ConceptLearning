import ContainerTwo from "./components/ContainerTwo"; 

const Container = ({data,updateData})=>{
    return (
        <div>
            <p>This is  first Component</p>
            <ContainerTwo data = {data} updateData={updateData}/>
        </div>

    );
};
export default Container;