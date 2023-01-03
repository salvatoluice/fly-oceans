import React from "react"

const Announcement = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "60%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='https://images.unsplash.com/photo-1580617332602-5a5ed8bc480f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Announcement
