export default function StyleHierarchy() {
    return (
    <div>
        <div className="selector-1">
        <h3> Style Hierarchy </h3>
        this is a div with the className as <b> .selector-1. </b> 
        <span className="selector-2"> this is a span with className selector-2.</span>
        <span className="selector-3"> within the div, we have this paragraph with the className <b>.selector-3.</b> </span>  
        <div className="selector-4"> 
            but this one is <b>.selector-4</b>. 
            Because the style specified an immediate hierarchy,
            This paragraph does not turn into light grey.

            <div className="selector-3">
            <span className="selector-4">
                But this one does.
            </span>
            </div>
        </div>
        </div>
        <h3> Positions </h3>
        <div className='position-1' style={{backgroundColor: "grey"}}>
            This is one div.
            <div className="position-2 margin-10px">
            This is a div inside the blue div which has the absolute position.
            </div>
            <div className="position-3 margin-30px">
            But this is a relative positioned div.
            </div>
        </div>
    </div>    
    );
}