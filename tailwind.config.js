/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'electric-red': 'var(--electric-red)',
                'gunmetal': 'var(--gunmetal)',
                'dark-electric-blue': 'var(--dark-electric-blue)',
                'crayola': 'var(--crayola)',
                'anti-flash-white': 'var(--anti-flash-white)',
            }
        },
    },
    plugins: [],
}
