import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: "#00FF00",
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/line-clamp')
    ],
    content: [
        "./node_modules/flowbite/**/*.js/*.ts"
    ]
    
};