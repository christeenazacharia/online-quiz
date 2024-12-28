import React, { useState ,useEffect} from 'react'

const CmpCreateJob = () => {


    const [clist,setCategoryList] = useState([]);
    const [formData,setFormData] =useState({
        fk_cat_id:'',
        job_title:'',
        job_desc:'',
        job_type:'',
        fk_reg_id:'6',
        last_apply_date:''
    })

    
    const getallCategory =() =>{
        fetch('http://localhost/react/get_category.php')
        .then(result =>{
        return result.json();})
    .then(responds=>{setCategoryList(responds);
    })
}
    useEffect(()=>{
        getallCategory()
    },[])


    const save_job = (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("fk_cat_id", formData.fk_cat_id);
        data.append("job_title", formData.job_title);
        data.append("job_desc", formData.job_desc);
        data.append("job_type", formData.job_type);
        data.append("fk_reg_id", formData.fk_reg_id);
        data.append("last_apply_date", formData.last_apply_date);
        
  
    fetch('http://localhost/react/save_job.php', {
      method: 'POST',
      body:data
    
    })
    .then((result) => result.json())
      .then((data) => {
        if(data.Status="true"){
       alert("login successfuly")
    }
    else{
      alert(data.Message)

    }
  })
 
};



    const handle_change = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };





  return (
    <div>
<h1>Create job</h1>

{JSON.stringify(formData)}

<br/>
<form onSubmit={save_job}> 
            <div class="form-group">
               
            <label  for="Title" class="form-label">Category</label>
            <select onChange={handle_change} class="form-select" aria-label="Default select example" name="fk_cat_id">
            {clist.map((item ) => (
  <option value={item.cat_id }> { item.cat_name }</option>

            ))}
</select>
</div>
            <label  for="Title" class="form-label">Title</label>
            <input onChange={ handle_change} type="text" class="form-control" name="job_title" />  
            <label for="Description" class="form-label">Desription</label>
            <input onChange={ handle_change} type="text" class="form-control" name="job_desc" />  
            <label for="type" class="form-label">Type</label><br/>
  <div class="form-check form-check-inline">
           
  <input onChange={ handle_change} class="form-check-input" type="radio"  id="inlineRadio1" name="job_type" value="part_time"/>
  <label class="form-check-label" for="inlineRadio1">part Time</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={ handle_change} class="form-check-input" type="radio"  id="inlineRadio2" name="job_type" value="full_time"/>
  <label class="form-check-label" for="inlineRadio2">Full Time</label>
</div>

<div>
            <label for="Last Apply Date" class="form-label">Last Apply Date</label>
            <input onChange={ handle_change} type="date" class="form-control" name="last_apply_date" />  
           
</div>

  <button type="submit" class="btn btn-primary">Save</button>



        
          </form>


    </div>
  )
}

export default CmpCreateJob