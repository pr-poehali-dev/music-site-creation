import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				carСейчас создам привлекательный сайт для музыки. План:

1. Обновлю главную страницу с музыкальным интерфейсом
2. Добавлю компоненты: музыкальный плеер, карточки альбомов и навигацию
3. Использую фиолетовую цветовую схему для атмосферы

<pp-code>
<pp-filepath>src/index.css</pp-filepath>
<pp-content>@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 250 20% 98%;
    --foreground: 250 40% 10%;

    --card: 0 0% 100%;
    --card-foreground: 250 40% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 250 40% 10%;

    --primary: 250 60% 60%;
    --primary-foreground: 250 10% 98%;

    --secondary: 250 20% 90%;
    --secondary-foreground: 250 40% 20%;

    --muted: 250 20% 96%;
    --muted-foreground: 250 30% 40%;

    --accent: 250 40% 94%;
    --accent-foreground: 250 40% 20%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 250 20% 90%;
    --input: 250 20% 90%;
    --ring: 250 60% 60%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 250 30% 8%;
    --foreground: 250 10% 98%;

    --card: 250 30% 10%;
    --card-foreground: 250 10% 98%;

    --popover: 250 30% 10%;
    --popover-foreground: 250 10% 98%;

    --primary: 250 60% 60%;
    --primary-foreground: 250 10% 98%;

    --secondary: 250 20% 16%;
    --secondary-foreground: 250 10% 98%;

    --muted: 250 20% 16%;
    --muted-foreground: 250 20% 70%;

    --accent: 250 20% 16%;
    --accent-foreground: 250 10% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 250 10% 98%;

    --border: 250 20% 16%;
    --input: 250 20% 16%;
    --ring: 250 60% 60%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .music-gradient {
    @apply bg-gradient-to-br from-primary/40 via-background to-accent/40;
  }
}
