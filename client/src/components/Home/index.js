import { GetJson, } from './api';

const Home = () => {
    const { data } = GetJson('/posts')
    const { data: todos } = GetJson('/todos')
    console.log(todos)
    return (
        <div></div>
    )
}
export default Home;