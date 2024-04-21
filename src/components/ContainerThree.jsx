
const ContainerThree = ({data})=>{
    return(
        <div>
            <h2>{data}</h2>
            <button onClick={() =>{
                updateData("This is will update the state");
            }}>Update Me</button>
            <p>{data}</p>
            </div>
    );
}
export default ContainerThree;