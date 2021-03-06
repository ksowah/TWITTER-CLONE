This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Visuals
- Login Page 
- ![login-image](https://github.com/ksowah/TWITTER-CLONE/blob/twitter-remote/images/login.png?raw=true)

- Home Page
- ![home-page-image](https://github.com/ksowah/TWITTER-CLONE/blob/twitter-remote/images/home.png?raw=true)

- Tweet
- ![tweet-image](https://github.com/ksowah/TWITTER-CLONE/blob/twitter-remote/images/tweet.png?raw=true)

- Post
- ![post-image](https://github.com/ksowah/TWITTER-CLONE/blob/twitter-remote/images/post.png?raw=true)

- Me
- ![kelvin-image](https://github.com/ksowah/TWITTER-CLONE/blob/twitter-remote/images/me.png?raw=true)

## Description
Today I completed a Project I've been working on. It is a clone of twitter. Users can sign in and make posts, comment and like other posts from other users I built it with React JS, Next JS and made use of Next Auth to persist users Login state. Images posted by users are uploaded to firebase cloud storage after which a URL to that image is pushed to firebase firestore ( A no SQL database ) along with some other user data. These data is then rendered on the server and displayed to the users.
Visit the [Twitter Clone](https://twitter-clone-ksowah.vercel.app/) and make a post, like, leave a comment on other posts, basically do anything you would do on Twitter. You can leave a feedback for me as a tweet as well. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
