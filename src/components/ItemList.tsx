import * as React from "react";
import DataTable from 'react-data-table-component';

function ItemList() {
   const getMovies = () => `{ movies { _id rated title year } }`;
   const [items,setItems] = React.useState([]);
   const columns = [
      {
          name: 'Title',
          selector: row => row.title,
          sortable:true,
      },
      {
          name: 'Year',
          selector: row => row.year,
          sortable:true,
      },
      {
         name: 'Rated',
         selector: row => row.rated,
         sortable:true,
     },
  ];
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
   const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;


   return (
      <div className="itemlist-section">
         <h5>ItemList Component</h5>
         <DataTable
            columns={columns}
            data={items} pagination expandableRows expandableRowsComponent={ExpandedComponent} />
      </div>
   );
}

export default ItemList;
