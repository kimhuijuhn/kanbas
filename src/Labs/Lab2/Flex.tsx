import "./index.css"

export default function Flex() {
    return (
        <div>
            <h3> Flex </h3>
            <div className="flex-container">
                <div className="flex-box" style={{backgroundColor: "beige"}}>
                    Box 1
                </div>
                <div className="flex-box" style={{backgroundColor: "gray"}}>
                    Box 2 Box 2
                    Box 2 
                </div>
            </div>
            <br/>
            <div className="flex-row-container">
                <div style={{backgroundColor: "yellowgreen", width: "240px", height: "240px"}}> sidebar-like row</div>
                <div style={{backgroundColor: "grey", height: "240px", flexGrow: "1"}}> Main Content </div>
                <div style={{backgroundColor: "navy", width: "120px", height: "240px", flexShrink: "0"}}></div>
            </div>
        </div>
        
    )
}