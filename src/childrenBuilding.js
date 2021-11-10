import Tabs from "./tabs";
import {useState} from "react";

const ChildrenBuilding = ({children}) => {


    const childrenBuilding = (children) => {
        if (Array.isArray(children)) {
            const arr = children.map((item, id) => {
                return (
                    <li key={id}>
                        <Tabs
                            title={item.name}

                            countries={Array.isArray(item.countries) && childrenBuilding(item.countries)}
                            languages={Array.isArray(item.languages) && childrenBuilding(item.languages)}
                        />
                    </li>
                )
            })

            return (
                <ol>
                    {arr}
                </ol>
            )
        }
    }
    return(
        childrenBuilding(children)
    )
}
export  default  ChildrenBuilding