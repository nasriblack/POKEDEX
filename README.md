# Pokemon Explorer

A modern React application for exploring Pokemon using the PokeAPI GraphQL endpoint. Built with React, TypeScript, Tailwind CSS, and Apollo Client ( in progress ).

This Project was made with pnpm as package manager, so if you want to use npm or yarn, you can change the package.json file and replace all the pnpm commands with npm or yarn.

![Pokemon Explorer](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)

## Features

- 🔍 Search Pokemon by name or ID
- 🎲 Random Pokemon selector
- 📊 Detailed Pokemon stats
- 🔄 Evolution chain visualization
- 🎨 Type-based theming
- 📱 Responsive design
- 📚 Component documentation with Storybook

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Apollo Client
- GraphQL Code Generator
- Storybook
- Vite
- React Router

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Start unit tests:
```bash
npm run test
```

Run Storybook:
```bash
npm run storybook
```

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── constants/        # Application constants
├── pages/           # Page components
├── services/        # API services
├── tests/          # Test utilities
└── types/           # TypeScript type definitions
```

## Features in Detail

### Search Page
- Search Pokemon by name or ID
- Random Pokemon selector
- Error handling for non-existent Pokemon

### Pokemon Details Page
- Dynamic background color based on Pokemon type
- Detailed Pokemon information
- Stats visualization
- Evolution chain
- Type badges with appropriate colors

### Component Library
- Documented components in Storybook
- Reusable PokemonCard component
- Type-safe props with TypeScript

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request


## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for the Pokemon data
- [PokeAPI GraphQL](https://beta.pokeapi.co/graphql/v1beta) for the GraphQL endpoint
- Pokemon sprites from the official PokeAPI sprites repository