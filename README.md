# Austria expat tips

This is the source code for the
[Austria expat tips website](https://austria-expat-tips.pages.dev/).

## How to contribute

Everything under the `pages` directory becomes a page of the website. Just
create a `.mdx` file and start writing.

## How to preview your changes locally

To preview the website locally, just make sure that you are running our web dev
server. It will generate the website and will hot-reload the page whenever your
save your changes.

You will need to have installed:

- [x] Node 20
- [x] pnpm 8

The easiest way to get this up and running is by installing
[Volta](https://volta.sh/) and exporting the following environment variable on
your shell (e.g. `.bash_profile`, `.zshrc`, or similar):

```shell
export VOLTA_FEATURE_PNPM=1
```

Then install all dependencies with:

```shell
pnpm install
```

Now you can run the local server with:

```shell
pnpm dev
```

Now visit [localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License.
