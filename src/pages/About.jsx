import React from 'react';
import { about } from '../posts/index';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

export default function About() {
	const { data, content } = matter(about[0].raw);

	return (
		<div className="max-w-2xl mx-auto p-6">
			<h1 className="text-3xl font-bold mt-10 mb-2">{data.title}</h1>
			<div className="prose prose-invert mt-6">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
		</div>
	);
}
