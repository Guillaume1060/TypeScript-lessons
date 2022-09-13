import React from 'react';

type CardProps ={
    title: string;
    content: string;
}

export default function Card(props : CardProps) {

    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    )
}
 //// OU 

 // CI DESSOUS, C'EST LA MEME CHOSE MAIS ON A DESTRUCTURE
// export default function Card({title,content} : CardProps) {
    
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{content}</p>
//       </div>
//     )
// }