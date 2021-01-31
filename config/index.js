const dev = process.env.NODE_ENV !== 'production';

export const appTitle = 'Movie Gallery';
export const appDesc = 'An example of a simple movie gallery web apps built in Next.js';
export const host = dev ? 'http://localhost:3000' : 'https://next-movie-gallery.vercel.app';
