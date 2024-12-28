import React from 'react'

const CmpLogin = () => {
  return (
    <>
    <h1>LOGIN</h1>
        <div class="card">
             <div class="class-header">
             </div>
             <div class="card-body">
             <form class="row g-3">
                    <div class="form-group">
                        <label>USERNAME</label>
                        <input  type="text" class="form-control" name="full_name" />
                    </div>
                    <div class="form-group"/>
                        <label>PASSWORD</label>
                         <input  type="password" class="form-control" name="full_name" />
                        <div class="form-group pt-2">
                        <button type="submit" class="btn btn-secondary mb-3">Save</button>
                        </div>

                   </form>
                   </div>
                   </div>
                   </>
  )
}

export default CmpLogin