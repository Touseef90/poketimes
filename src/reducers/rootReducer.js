const initState = {
    posts: [
        {id:'1', title:'Lrorm lipsum sde aiio', body:'Sed du ti sae fea aeq feklad adw fff we rew faefd'},
        {id:'2', title:'Lrorm lipsum sde aiio', body:'Sed du ti sae fea aeq feklad adw fff we rew faefd'},
        {id:'3', title:'Lrorm lipsum sde aiio', body:'Sed du ti sae fea aeq feklad adw fff we rew faefd'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state, 
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;