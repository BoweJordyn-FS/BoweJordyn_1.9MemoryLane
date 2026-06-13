---
title: 'Two Libraries That Made Connecting APIs To React A Breeze'
date: 'June 10, 2026'
excerpt: 'If you struggle with connecting'
heroImage: '/juanjo-jaramillo-mZnx9429i94-unsplash.jpg'
---

I always look for ways to make my life easier. When I build a React app that connects to a RESTful API using fetch, it can get complicated. I have to set up loading states, handle errors, and manage data. Before I know it, I end up with 30 lines of code just to show a list of data. Luckily, I found a better solution for working with APIs: **Axios and TanStack Query**.

### Axios: The Better HTTP Client

Axios is a widely used open-source JavaScript library for making HTTP requests in web browsers or Node.js environments. It simplifies sending asynchronous HTTP requests to REST endpoints, managing responses, and executing various network-related tasks.

> [Some Key Features of Axios](https://www.geeksforgeeks.org/html/what-is-axios/)

> - **Promise-Based**: Axios uses Promises, making it easier to handle asynchronous requests with modern JavaScript features like async/await.
> - **Interceptors**: Allows you to intercept and modify requests or responses before they are handled by .then() or .catch().
> - **Automatic JSON Data Transformation:** Automatically transforms JSON data to JavaScript objects, making data manipulation simpler.
> - **Error Handling:** Provides a structured way to handle HTTP errors using the catch() method.
> - **Supports All HTTP Methods**: Including GET, POST, PUT, DELETE, PATCH, and more.

#### Using Axios to Make a GET Request

```
import api from './axios';

export const getPosts = () =>
	api.get('/posts').then((res) => res.data);

```

### Tanstack Query: Server State Made Simple

Tanstack Query makes it easy to fetch data and manage state. It takes care of everything for you. It helps you get, store, and update data smoothly. This library is one of the best for managing server state. You can use it right away without needing any setup.

#### Using TanStack

```
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Feed() {
	const {
		data: posts,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['posts'],
		queryFn: getPosts,
	});
    return(
        <div>
			<section>
				{isLoading && (
					<p>Loading...</p>
				)}
				{isError && (
					<p>Could not load posts.</p>
				)}
				{posts?.map((post) => (
					<PostCard
						key={post.id}
						post={post}
				/>
					))}
			</section>
		</div>
    )
}
```

### Using TanStack and Axios Together

TanStack Query lets you fetch data without worrying about the method you use. It only needs a function that returns a Promise. An Axios call serves this purpose well. You link your query functions to your Axios instance, keeping the two parts separate: Axios manages the HTTP details, while TanStack Query takes care of caching and state.

```
 const {data: posts } = useQuery({
		queryKey: ['posts'],
		queryFn: getPosts, // <== Axios
	});

```

Once you replace a messy fetch call with Axios, you'll wonder why you ever did it any other way. You'll write less code and encounter fewer bugs. It's a combination I always return to, and I'm confident that once you try it, you will too.
