import Tabs from "./tabs";

export default function TabsTest(){
    function RandomComponent(){
        return <div>
            this is random component
        </div>
    }
const handleChange =(currentContentIndex)=>{
console.log(currentContentIndex);

}
    const data = [
        {
            label : "tab 1",
            content : "this is the first content"
        },
        {
            label : "tab 2",
            content : "this is the second content"
        },
        {
            label : "tab 3",
            content : <RandomComponent/>
        }
    ]
    return (
        <Tabs data={data} onChange={handleChange}/>
    )
}