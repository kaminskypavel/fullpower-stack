import Link from "next/link";
import React from "react";
export const Post = ({ title, createdAt, content, id }) => (
  <Link href={`/post/${id}`}>
    <div className="md:max-w-l mx-4 my-4 flex max-w-md rounded-lg bg-white shadow-lg ">
      <div className="flex w-full items-start px-4 py-6">
        <img
          className="mr-4 h-12 w-12 rounded-full object-cover shadow"
          src={`https://source.unsplash.com/random/?Person&${id}&auto=format&fit=crop&w=500&q=60`}
          alt="avatar"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h2 className="-mt-1 text-lg font-semibold text-gray-900">
              {title ?? "John Doe"}
            </h2>
            <small className="text-sm text-gray-700">{createdAt}</small>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            {content ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}
          </p>
          <div className="mt-4 flex items-center">
            <div className="mr-3 flex text-sm text-gray-700">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="mr-1 h-4 w-4"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>12</span>
            </div>
            <div className="mr-2 mr-8 flex text-sm text-gray-700">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="mr-1 h-4 w-4"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>8</span>
            </div>
            <div className="mr-4 flex text-sm text-gray-700">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="mr-1 h-4 w-4"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
