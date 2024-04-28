import React from 'react'

const DanhSachHang = (props) => {
  let {data,themVaoGio} = props
  return (
    <div className='row'>
      {data.map((data,index)=>{
        return <div className='col-4 mt-2' key={index}>
        <div className='card'>
          <img src={data.image} alt="..." />
        <div className='card-body'>
          <h3>{data.name}</h3>
          <p>{data.price}</p>
          <button className='btn btn-dark' onClick={()=>{
            themVaoGio(data)
          }}>Add To Cart <i className='fa fa-cart-plus'></i></button>
        </div>
        </div>
      </div>
      })}
      
    </div>
  )
}

export default DanhSachHang
