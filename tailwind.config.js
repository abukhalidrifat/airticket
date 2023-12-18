/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
module.exports = {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
        screens: {
            'x2xl': { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            'xxl': { max: "1340px" },
            // => @media (max-width: 1279px) { ... }

            'xlg': { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            'xmd': { max: "767px" },
            // => @media (max-width: 767px) { ... }

            'xsm': { max: "639px" },
            // => @media (max-width: 639px) { ... }
            'sm': "640px",
            // => @media (min-width: 640px) { ... }

            'md': "768px",
            // => @media (min-width: 768px) { ... }

            'lg': "1024px",
            // => @media (min-width: 1024px) { ... }

            'xl': "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [require("tailwindcss-animate"), forms],
};
