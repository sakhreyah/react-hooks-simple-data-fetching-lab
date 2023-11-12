// create your App component here
import { useEffect, useState } from "react"
function App() {
    const [randImage, setRandImage] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then((image) => setRandImage(image.message))
    }, [])

    return (
        !randImage ? <p>Loading...</p> : <img src={randImage} alt={"A Random Dog"}></img>
    )
}

export default App;