import {useCallback, useEffect, useState} from "react";
import agent from "../utils/agent";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('none');

  console.log(filter);

  useEffect(() => {
    if (posts.length === 0) {
      agent.get('/flow').then(
        (res) => {
          const newPosts = res.data.map((item) => {
            const splittedLink = item.image.split('/');

            const category = splittedLink[splittedLink.length - 1];

            return { ...item, category }
          })

          const uniqCategories = newPosts.map((item) => item.category).filter(onlyUnique)

          setPosts(newPosts);
          setCategories(uniqCategories)
        }).catch(console.log)
    }
  }, []);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const filterPosts = useCallback(() => {
    return filter === 'none' ? posts : posts.filter((item) => item.category === filter);
  }, [posts, filter])

  const filteredPosts = filterPosts();

  return {posts: filteredPosts, categories, filter, setFilter}
}
export default usePosts
