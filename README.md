# Hugo on Github Pages example

An example [Hugo] site that is hosted on [Github Pages].

[Hugo]: https://gohugo.io/
[Hugo documentation]: https://gohugo.io/documentation/
[Github Pages]: https://pages.github.com/

## Getting started

### Preparation

Install [Hugo] following [Hugo documentation].

```sh
# Clone this project
❯ git clone https://github.com/mnishiguchi/hugo-gh-example.git

# Move into the project directory
❯ cd hugo-gh-example
```

### Development

```sh
# Move into site directory
❯ cd site

# Start a Hugo development server
❯ hugo server
```

Visit http://localhost:1313/hugo-gh-example/

### Hosting on Github Pages

1. Adjust `baseURL` in `site/config.yaml` using your Github username, like `https://<username>.github.io/<repo-name>`.
1. Create a Github repo for your site.
1. `git push`, then the Github workflow defined in `.github/workflows/gh-pages.yml` will do all the heavy-lifting for [Github Pages].

The site URL will be `https://<username>.github.io/<repo-name>`.

That's it!
