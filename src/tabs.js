import {useState} from "react";

const Tabs = ({title, countries,languages}) => {
    const [display,setDisplay] = useState('none')
    return(
        <div >
            <h3
                onClick={()=> display === 'none'? setDisplay('block') : setDisplay('none')}>
                {title}
            </h3>

            <p style={{display:display}}>{countries}</p>
            <p
                onClick={() =>{setDisplay('none')}}
                style={{display:display}}>{languages}</p>
        </div>
    )
}

export  default Tabs