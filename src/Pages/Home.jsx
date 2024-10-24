import React from 'react'

function Home() {
  
  const navList = ['instagram','github','linkedIn', 'email', 'resume']
  
  const NavComp = () => {
    return(
      <ul className='grid grid-cols-5 text-sm font-light tracking-wider border-b'>
        {navList.slice(0, 4).map((user, index) => (
          <li className='listNav flex justify-between h-[130px] py-2 pl-1 border-r hover:bg-red-200' key={index}>
          <span className=''>{user}</span>
            <span className='w-3 h-3 ml-[3px]'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.7786 8.62136L6.30886 8.64017L6.31458 6.37172L17.6569 6.34314L17.6283 17.6854L15.3598 17.6911L15.3786 10.2214L7.14315 18.4569L5.54315 16.8569L13.7786 8.62136Z" fill="#ECE7E1"/>
              </svg>
            </span>
          </li>
        ))}
        <li className='listNav flex justify-between h-[130px] py-2 pl-1 hover:bg-red-200' key={4}>
          <span className=''>{navList[4]}</span>
            <span className='w-3 h-3 ml-[3px]'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1314 15.6468L18.4 10.3515L20 11.9596L12 20L4 11.9596L5.6 10.3515L10.8686 15.6468L10.8686 4H13.1314V15.6468Z" fill="#ECE7E1"/>
              </svg>
            </span>
        </li>
      </ul>
    )
  }

  return (
    <div>
      <ul>
        <NavComp/>
      </ul>
    </div>
  )
}

export default Home