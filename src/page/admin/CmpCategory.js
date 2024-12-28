import React, { useEffect, useState } from 'react'
const CmpCategory = () => {
    const [clist,setCategory] = useState([]);
    const[formData,setFormData]=useState({
        cname:' '
    })
    const getallCategory =()=>{
        fetch('http://localhost/react/get_category.php')
        .then(result =>{
            return result.json();
        }).then(responds=>{
            setCategory(responds)
        })
    }
    useEffect(()=>{
        getallCategory()
    },[]) 
    const  save_category=(e)=>{
        e.preventDefault();
        const data=new FormData();
        data.append("cname",  formData.cname);
        fetch('http://localhost/react/save_category.php',{
            method:"POST",
            body: data
        })
        .then((result)=>{
            return result.json();
        })
        .then((data)=>{
            if(data.Status){
                getallCategory();
            }else{
                alert(data.Message)
            }
        })
    }
    const handle_change=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const  delete_category=(cid)=>{
        const data=new FormData();
        data.append("cid",  cid);
        fetch('http://localhost/react/delete_category.php',{
            method:"POST",
            body: data
        })
        .then((result)=>{
            return result.json();
        })
        .then((data)=>{
            if(data.Status){
                getallCategory();
            }else{
                alert(data.Message)
            }
        })
    }
    return (
        <>
        {JSON.stringify(formData)}
   <div class="row">
    <div class="col-md-6 mx-auto">
        <div class="card">
        <div class="card-body">
        <h5 align="center">CATEGORY</h5>   
        </div>
       <form class="row g-3" onSubmit={save_category}>
  <div class="col-auto">
  <label for="cname" >CATEGORY NAME</label>  
  </div>
  <div class="col-auto">
  <input onChange={handle_change} type="text" class="form-control"  name='cname' />
  </div>
  <div class="col-auto">
  <button type="submit" class="btn btn-success mb-3">SAVE</button>
</div>
</form>
<table class="table table-bordered table-stripped">
    <thead>
        <th>SL NO</th>
        <th>CATEGORY</th>
        <th>ACTION</th>
    </thead>
    <tbody>
        {clist.map((item,  index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{item.cat_name}</td>
                <td>
                    <button onClick={()=>{delete_category(item.cat_id)}} class="btn btn-danger">DELETE </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>
       </div>
    </div>
   </>
        
  )
}
export default CmpCategory;