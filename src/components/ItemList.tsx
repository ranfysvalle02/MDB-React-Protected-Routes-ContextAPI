import * as React from "react";
import DataTable from 'react-data-table-component';
import "@google/model-viewer";

declare global {
   namespace JSX {
      interface IntrinsicElements {
         'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> ;
      }
   }
}
 
 interface ModelViewerJSX {
   src: string
}

function ItemList() {
   const getAvatars = () => `{ avatars { _id display_name glb } }`;
   
   const [items,setItems] = React.useState([]);
   const columns = [
      {
          name: 'Display Name',
          selector: row => row.display_name,
          sortable:true,
          width:"25%"
      },
      {
          name: 'RPM GLB',
          selector: row => row.glb,
          sortable:true,
      }
  ];
   React.useEffect(()=>{
      const options = {
         method: "post",
         headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer "+sessionStorage.getItem('_token')
         },
         body: JSON.stringify({
         query: getAvatars()
         })
      };
   
      fetch(`__GRAPHQL_ENDPOINT__`, options)
         .then(res => res.json())
         .then((x)=>{
            console.log('x.data',x.data);
            setItems(x.data.avatars);
      });


   },[])
   const ExpandedComponent = ({ data }) => {
      const [ctext,setctext] = React.useState(JSON.stringify(data, null, 2));
      let x = JSON.parse(ctext);

      return <div>
         <model-viewer
                  style={{
                     width:"75%",margin:"0 auto"
                  }}
                  id="viewer"
                  src={x.glb}
                  ios-src={x.glb}
                  auto-rotate
                  camera-controls
                  ar-modes="webxr scene-viewer quick-look"
                  xr-environment
            ></model-viewer>
         <button type="button" onClick={()=>{
            let newData = JSON.parse(ctext);
            const updateAvatar = () => `mutation { updateOneAvatar(query:{ _id:"${data._id}" },set:{ display_name:"${newData.display_name}", glb:"${newData.glb}" }) { _id display_name glb partition_id } }`;
            const options = {
               method: "post",
               headers: {
               "Content-Type": "application/json",
               "Authorization": "Bearer "+sessionStorage.getItem('_token')
               },
               body: JSON.stringify({
               query: updateAvatar()
               })
            };
         
            fetch(`__GRAPHQL_ENDPOINT__`, options)
               .then(res => res.json())
               .then((x)=>{
                     console.log('x.data',x.data);
                     alert('Update successful!')
                     const options_refresh = {
                        method: "post",
                        headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer "+sessionStorage.getItem('_token')
                        },
                        body: JSON.stringify({
                        query: getAvatars()
                        })
                     };
                  
                     fetch(`__GRAPHQL_ENDPOINT__`, options_refresh)
                        .then(res => res.json())
                        .then((x)=>{
                           console.log('x.data',x.data);
                           setItems(x.data.avatars);
                     });
               });
      
         }}>update</button>
         <button type="button" onClick={()=>{
            const deleteAvatar = () => `mutation { deleteOneAvatar(query:{ _id:"${data._id}" }) { _id display_name glb partition_id } }`;
            const options = {
               method: "post",
               headers: {
               "Content-Type": "application/json",
               "Authorization": "Bearer "+sessionStorage.getItem('_token')
               },
               body: JSON.stringify({
               query: deleteAvatar()
               })
            };
         
            fetch(`__GRAPHQL_ENDPOINT__`, options)
               .then(res => res.json())
               .then((x)=>{
                     console.log('x.data',x.data);
                     alert('Delete successful!')
                     const options_refresh = {
                        method: "post",
                        headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer "+sessionStorage.getItem('_token')
                        },
                        body: JSON.stringify({
                        query: getAvatars()
                        })
                     };
                  
                     fetch(`__GRAPHQL_ENDPOINT__`, options_refresh)
                        .then(res => res.json())
                        .then((x)=>{
                           console.log('x.data',x.data);
                           setItems(x.data.avatars);
                     });
               });
      
         }}>delete</button>
         <textarea id={data._id} style={{width:"100%",height:"5em"}} value={ctext} onChange={(e)=>{
            setctext(e.target.value);
         }}></textarea>
      </div>};


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
