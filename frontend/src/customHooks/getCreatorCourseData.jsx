// import React, { useEffect } from 'react'
// import { serverUrl } from '../App'
// import axios from 'axios'
// import { setCreatorCourseData } from '../redux/courseSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { toast } from 'react-toastify'

// const getCreatorCourseData = () => {
//     const dispatch = useDispatch()
//     const {userData} = useSelector(state=>state.user)
//   return (
//     useEffect(()=>{
//     const getCreatorData = async () => {
//       try {
//         const result = await axios.get(serverUrl + "/api/course/getcreatorcourses" , {withCredentials:true})
        
//          await dispatch(setCreatorCourseData(result.data))

        
//         console.log(result.data)
        
//       } catch (error) {
//         console.log(error)
//         toast.error(error.response.data.message)
//       }
      
//     }
//     getCreatorData()
//   },[userData])
//   )
// }

// export default getCreatorCourseData









import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { setCreatorCourseData } from '../redux/courseSlice'
import { useDispatch, useSelector } from 'react-redux'

const getCreatorCourseData = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.user)

    return (
        useEffect(() => {
            if (!userData) return // user login nahi hai to call hi mat karo

            const getCreatorData = async () => {
                try {
                    const result = await axios.get(serverUrl + "/api/course/getcreatorcourses", { withCredentials: true })
                    await dispatch(setCreatorCourseData(result.data))
                    console.log(result.data)
                } catch (error) {
                    console.log(error) // toast hata diya - login na hone par silently fail
                }
            }
            getCreatorData()
        }, [userData])
    )
}

export default getCreatorCourseData