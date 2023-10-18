import React, {FC, useState} from "react";
import style from './UI/MyButton.module.css'


interface ButtonProps {
  width?: string;
  height?: string;
  background?: string;
  border?: string; 
  children?: string | React.ReactElement;
  onClick: (num: number) => void;
}

const Button: FC<ButtonProps> = 
    ({ width, 
       height, 
       background, 
       border,
       children,
       onClick
     
    }) => {
  
        const [state, setState]  = useState(0);
  return(

   
<button className={style.myBtn} onClick={() => onClick(state)}>
      {children}
    </button>

  )


};

export default Button;
