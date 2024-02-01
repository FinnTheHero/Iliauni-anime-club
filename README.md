# Iliauni Anime Club

<p style="font-size: 20px;">
Welcome to the Iliauni Anime Club's official website repository!
This repository contains the code for our club's website, featuring information about events, FAQs, member testimonials, and signup links.
</p>

![logo](./public/images/logo.png)

# License

This project is licensed under the [MIT License](LICENSE).

# Contact

If you have any questions or suggestions, feel free to reach out to us at

- [Discord](https://discord.gg/4GyHADSG8M)
- [Facebook](https://www.facebook.com/profile.php?id=100092313884938)
- [Mail](mailto:animelovers@iliauni.edu.ge)

# Project Structure

- Now using [Tailcast](https://github.com/matt765/Tailcast.git) as a template

```sh
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Everything in `src/pages/` that ends with `.astro` or `.md` is a route based on its filename.

Components go into `src/components/`.

Images go into `public/images` directory.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## For more details see [Astro Docs](https://docs.astro.build)
