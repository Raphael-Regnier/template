# 11ty with Tailwind CSS v4 Template

A modern website template built with 11ty and Tailwind CSS v4.

## Features

- Built with 11ty v3.1.0
- Styled with Tailwind CSS v4
- Responsive design
- Blog support
- Fast build times
- Development server with live reload

## Project Structure

```
.
├── src/                    # Source files
│   ├── _data/             # Global data files
│   │   └── site.js        # Site configuration
│   ├── _includes/         # Include files and partials
│   ├── _layouts/          # Layout templates
│   │   └── base.njk       # Base layout
│   ├── assets/           
│   │   └── styles/        # CSS files
│   │       └── index.css  # Main CSS file with Tailwind imports
│   ├── blog/              # Blog posts
│   ├── about.njk          # About page
│   ├── blog.njk           # Blog index
│   └── index.njk          # Home page
├── eleventy.config.js     # 11ty configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run serve
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Customization

- Edit `src/_data/site.js` to update site-wide configuration
- Modify `src/_layouts/base.njk` to change the base layout
- Add new pages in the `src` directory
- Create blog posts in the `src/blog` directory

## License

MIT
