/* eslint-disable react/no-unescaped-entities */
import React from "react";
import useTitle from "../../../custom hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-12">
      <h2 className="text-4xl text-center font-semibold my-4">
        Questions Answer
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a token that is used to authenticate and
            authorize a user to access protected resources on a server. It is
            used to verify the user identity . The access token is short-lived
            and has an expiration time.
            <br />A refresh token is a long-lived credential used to obtain a
            new access token without having to reauthenticate the user or the
            application.
            <br />
            Access Token: The access token should be securely stored on the
            client-side.
            <br />
            Refresh Token: The refresh token should be stored in a more secure
            manner than the access token like env.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL (Structured Query Language) and NoSQL (Not only SQL) are two
            different types of database management systems. In SQL are table
            based data storage system and & No-SQL are non-tabular based data
            storage system.
            <br />
            SQL: <b>Oracle,MySQL</b> <br />
            No-SQL: <b>MongodbL</b> <br />
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a web application framework for Node.js.it allows us
            to handle HTTP requests, define routes, handle middleware, and
            manage responses.
            <br />
            NestJS is a powerful Node.js framework for building scalable and
            efficient server-side applications. It provides built-in support for
            features like routing, dependency injection, middleware, error
            handling, authentication, and more
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            MongoDB's aggregation allows us to perform data aggregation
            operations on your MongoDB collections. It works by processing
            documents through a pipeline that consists of various stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
