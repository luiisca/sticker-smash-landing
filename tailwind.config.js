import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "primary-glow": "var(--primary-glow)",
                "secondary-glow": "var(--secondary-glow)",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                cal: ["var(--font-cal)"],
            },
            colors: {
                muted: "hsl(var(--muted))",
                subtle: "hsl(var(--subtle))",
                emphasis: "hsl(var(--emphasis))",
                brand: {
                    emphasis: "hsl(var(--brand-emphasis))",
                    secondary: "hsl(var(--brand-secondary))",
                    secondaryEmphasis: "hsl(var(--brand-secondary-emphasis))",
                    DEFAULT: "hsl(var(--brand))",
                },
                foreground: {
                    emphasis: "hsl(var(--text-emphasis))",
                    DEFAULT: "hsl(var(--text))"
                },
            },
            textColor: {
                subtle: "hsl(var(--text-subtle))",
            },
        },
    },
    plugins: [
        plugin(function({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'translate-z': (value) => ({
                        '--tw-translate-z': value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }), // this is actual CSS
                },
                { values: theme('translate'), supportsNegativeValues: true }
            )
        })
    ],
};
