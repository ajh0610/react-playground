function Navbar({setColor}){

    function handleColorChange(id){
        setColor(id);
    }
    return(

        <>
        <div className="navbar-style">
            <button className="button-style" onClick={()=>handleColorChange(5)}>Red</button>
            <button className="button-style" onClick={()=>handleColorChange(2)}>Purple</button>
            <button className="button-style" onClick={()=>handleColorChange(3)}>Green</button>
            <button className="button-style" onClick={()=>handleColorChange(4)}>Yellow</button>
            <button className="button-style" onClick={()=>handleColorChange(0)}>Default</button>
            <button className="button-style" onClick={()=>handleColorChange(1)}>Black</button>
        </div>
        </>
    )
}

export default Navbar