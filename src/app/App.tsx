import {useSelector} from "react-redux";
import {getPostsData} from "../components/TableContent/model/selectors/postsSelectors";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {useEffect} from "react";
import {fetchPostsList} from "../components/TableContent/model/services/fetchPostsList/fetchPostsList";
import {postsActions} from "@/components/TableContent/model/slices/postsSlice";

function App() {
    const dispatch = useAppDispatch()
    const posts = useSelector(getPostsData)
    useEffect(() => {

        dispatch(fetchPostsList())
        console.log(posts)
    }, [dispatch])

    return (
        <div className={'App'}>

        </div>
    )
}

export default App;