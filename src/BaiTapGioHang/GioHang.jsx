import React from 'react'

const GioHang = (props) => {
  let {arrGioHang,xoaHang,doiSoLuong} = props

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Tổng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrGioHang.map((item,index)=>{
            return <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><img src={item.image} width={50} alt="..." /></td>
            <td>{item.price}</td>
            <td>
              <button className='btn btn-dark mx-2' onClick={()=>{
                doiSoLuong(item.id,1)
              }}>+</button>
              {item.soluong}
              <button className='btn btn-dark mx-2' onClick={()=>{
                doiSoLuong(item.id,-1)
              }}>-</button>

            </td>
            <td>{item.price * item.soluong}</td>
            <td>
              <button className='btn btn-danger'onClick={()=>{
                xoaHang(item.id)
              }}><i className='fa fa-trash'></i></button>
            </td>

          </tr>

          })}
        </tbody>
      </table>
      
    </div>
  )
}

export default GioHang
