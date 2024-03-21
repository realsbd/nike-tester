import React from 'react'

const MyFooter = () => {
  return (
    <>
        <footer className="text-white p-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-warning">
              <img style={{ height: "50px" }} src="https://i.pinimg.com/564x/bd/d5/51/bdd551490e97ebcbd21b72ba10c348eb.jpg" alt="" />
              <p className="font-bold">Nike..</p>
              <br />
              <p>Begin testing today</p>
            </div>

            <div className="text-warning">
          
              <a href="" className="btn btn-warning btn-floating mx-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <button className="btn btn-warning btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn btn-warning btn-floating mx-1">
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter