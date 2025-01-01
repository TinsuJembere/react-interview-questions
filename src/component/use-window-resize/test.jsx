import UseWindowResize from ".";


export default function UseWindowResizeTest(){
    const windowSize = UseWindowResize();
    const {width, height} = windowSize;

    return <div>
    <h1>use window resize hook</h1>
    <p>the width of the window is {width}</p>
    <p>the height of the window is {height}</p>
    </div>
}