import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initUsers=useLoaderData()
    const [users,setUsers]=useState(initUsers)

    const handleDelete=(_id)=>{
// console.log('deleted', _id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

fetch(`http://localhost:3000/users/${_id}`,{
  method: "DELETE"
})
.then(res=>res.json())
.then(data=>{
  if(data.deletedCount){
    const remainingUsers=users.filter(user=>user._id!==_id)
    setUsers(remainingUsers)
    //  Swal.fire({
    //   title: "Deleted!",
    //   text: "User has been deleted.",
    //   icon: "success"
    // });
  }
}
)

    } 
    return (
        <div>
            <h2 className='text-3xl text-amber-100 mt-5 text-center'>Users: {users.length}</h2>

            <div className="overflow-x-auto ">
  <table className="table mt-8 ">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Contacts</th>
        <th>Creation time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><tr key={users._id}>
        <th>
            {index+1}
          
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
         {user.email}
          <br />
          <span className="badge badge-ghost badge-sm">{user.phone}</span>
        </td>
        <td>{user.creationTime}</td>
        <th className=''>
         <div className='gap-5'>
           <button className="btn btn-warning btn-xs">V</button>
          <button className="btn btn-accent btn-xs">E</button>
          <button onClick={()=>handleDelete(user._id)} className="btn btn-error btn-xs">D</button>
         </div>
        </th>
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Users;