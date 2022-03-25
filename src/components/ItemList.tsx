import * as React from "react";

function ItemList() {
   const getMovies = () => `{ movies { _id rated title year } }`;
   const [items,setItems] = React.useState([]);

   React.useEffect(()=>{
      const options = {
         method: "post",
         headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer "+sessionStorage.getItem('_token')
         },
         body: JSON.stringify({
         query: getMovies()
         })
      };
   
      fetch(`__GRAPHQL_ENDPOINT__`, options)
         .then(res => res.json())
         .then((x)=>{
            console.log('x.data',x.data);
            setItems(x.data.movies);
      });


   },[])


   return (
      <div className="itemlist-section">
         <h5>ItemList Component</h5>
         <ul style={{listStyle:"none",maxHeight:"20em",overflowY:"scroll"}}>
            {items.map((item, index) => (
               <li key={index}>
                  <span>{item.title}</span>(<b>{item.year}</b>) &nbsp; 
                  <i>{item.rated}</i>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemList;
