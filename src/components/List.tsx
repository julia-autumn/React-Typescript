import React from "react";

interface ListProps<T>  {
    items: T[];
    renderItem:(item: T) => React.ReactNode  
}

export default function List<T> (props: ListProps<T>) {
    return (
<div style={{ textAlign: "center" }}>
  {props.items.map(props.renderItem)}
</div>

    )

}