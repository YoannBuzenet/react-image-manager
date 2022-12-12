import { useImageManager } from "../../src/hooks/hooks"

const DemoButton = () => {

    const { isDisplayedImageManager,
        setIsDisplayedImageManager } = useImageManager();

    return <>
        <button onClick={() => {
            setIsDisplayedImageManager(true);
        }}>Appear !</button>
    </>
}

export default DemoButton;