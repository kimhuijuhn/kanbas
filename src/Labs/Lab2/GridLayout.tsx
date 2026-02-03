export default function GridLayout() {
    return (
        <div style={{clear: "both"}}>
            <div style={{
                float: "left", 
                width: "33%", 
                height: "60px", 
                color: "white",
                backgroundColor: "red"}}>
                Top left
            </div>

            <div style={{
                float: "left", 
                width: "67%", 
                height: "60px", 
                color: "white",
                backgroundColor: "blue"}}>
                Top Right
            </div>
        </div>
    )
}