import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updateArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)

                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })

        setAllPhotos(updateArr);
    }

    return(
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}