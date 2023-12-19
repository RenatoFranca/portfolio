# Renato França's Portfolio

Welcome to my professional journey as a developer, a path I've been passionately following since 2012. Specializing in full-stack development, my portfolio is a curated showcase of my technical proficiency, innovative solutions, and a decade's worth of experience in crafting high-quality web applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Local Language Debugging](#local-language-debugging)
- [Contributing](#contributing)
- [License](#license)

## Setup

Steps to setup the project:

### 1. Clone the repo:

```
git clone git@github.com:RenatoFranca/renatofranca.com.git
```

### 2. Navigate to the project directory:

```
cd renatofranca.com
```

### 3. Install dependencies:

```
yarn
```

## Local Language Debugging

To aid in local development, especially when testing multi-language support, the `DEBUG_LANGUAGE` environment variable can be used.

### Setup

1. Create a `.env.local` file in your project's root directory if it doesn't already exist.
2. Add the `DEBUG_LANGUAGE` variable with the desired locale code. For example:

```
DEBUG_LANGUAGE=pt-br
```

This will override the automatic language detection and set the application's language to Portuguese during development.

### Notes

- The `DEBUG_LANGUAGE` setting is only intended for local development and should not be used in production.
- Remember to restart your development server after making changes to the `.env.local` file.

## Contributing

How to contribute to the project:

- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes.
- Commit your changes (`git commit -am 'Add some feature'`).
- Push to the branch (`git push origin feature-branch`).
- Create a new Pull Request.

## License

This project is licensed under the MIT License.
