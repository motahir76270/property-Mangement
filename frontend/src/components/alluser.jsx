import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ViewModal from './viewModal'
import { Link } from 'react-router-dom'
import { UserContext } from '../context'

// DnHlEQ54ltp0q6hw

function AllList() {
  const [type , setType] = useState('')  
  console.log(type)
  const [ open , setOpen ] = useState(false)
  const [listData , setListData] = useState([])
  const {selectedList ,setselectedList} = useContext(UserContext)
  // const Url = import.meta.env.VITE_FRONTEND_URL;

useEffect(() => {
  const fetchList = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/');
      console.log(data);
      setListData(data);
      localStorage.setItem('alldata' , JSON.stringify(data))
    } catch (error) {
      console.error('Error fetching list:', error);
    }
  };

  fetchList(); // <--- call the async function here
}, [type]); // <--- empty array means this runs once on component mount

  const handleuser = (item) => {
    setOpen(true);
    setselectedList(item)
  }
   
  return (
    <>
    <main className='p-5 md:p-[3rem] min-h-screen flex flex-col gap-4 bg-gray-300'>
     <div className='flex justify-between '>
      <h1 className='text-xl md:text-3xl font-semibold'>Mini Properties Dashboard </h1>
       <Link to="/addProperty" >
        <button className='bg-blue-500 w-30 md:w-40 h-10 text-white rounded-lg hover:bg-blue-400 hover:cursor-pointer '>Add Property</button>
       </Link>
     </div>
    
    {/* // filter option */}
     <div className='flex flex-col gap-2'>
      <h2 className='font-semibold'>Property Listings</h2>

      <select onChange={(e) => setType(e.target.value)} className='w-55 md:w-50 h-10 px-[2rem]  border-1 border-gray-800 rounded-sm' name="select" id="">
        <option value="" > Filter by Type </option>
        <option value="PLOT" className='bg-blue-400'> PLOT </option>
        <option value="SHED" className='bg-blue-300'> SHED </option>
        <option value="Retailer Store" className='bg-blue-400'> Retailer Store</option>
        <option value="PLOT STORE" className='bg-blue-300'> PLOT STORE</option>
      </select>
     </div>

   {/* card */}
<section className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6  py-4">
  {listData?.filter(item => !type || item.type === type).map?.((item, idx) => (
    <div
      key={idx}
      className="flex flex-col justify-between h-full p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800">{item.name?.toUpperCase()}</h1>
        <h2 className="text-sm font-medium text-gray-500"> {item.type} </h2>
        <h2 className="text-sm text-gray-600">{item.location}</h2>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3">{item.description}</p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <h1 className="text-lg font-semibold text-gray-900">${item.price}</h1>
        <button
          onClick={() => handleuser(item)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View
        </button>
      </div>
    </div>
  ))}
      
</section>
  
    <div> <ViewModal setOpen={setOpen} open={open} selectedList={selectedList} /></div>
    </main>


    </>
  )
}

export default AllList
