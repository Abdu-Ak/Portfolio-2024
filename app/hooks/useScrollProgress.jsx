import React from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = React.useState(0)

    React.useEffect(() => {
       const updateScrollCompletion = () =>{ 
       const currentProgress = window.scrollY
       const scrollHeight  = document.body.scrollHeight - window.innerHeight
        if (scrollHeight) {
            setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100)
        }
       }

       window.addEventListener('scroll' , updateScrollCompletion)
       return () => window.removeEventListener('scroll' , updateScrollCompletion)
    }, [])

    return completion
}

export default useScrollProgress