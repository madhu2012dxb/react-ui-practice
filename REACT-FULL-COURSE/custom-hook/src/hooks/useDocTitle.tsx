import {useEffect} from 'react'

function useDocTitle(count:number) {
    console.log('useDocTitle Called')
    useEffect(()=>{
        console.log('useEffect Called')
        document.title=`Count-${count}`;
   },[count])
}

export default useDocTitle
