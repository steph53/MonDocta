# MonDocta

This project is a Fullstack ecommerce project based on the opensource project medusaJS. The front-end which is the storefront is made using NextJs Framework together with the React Library hosted on vercel. The Backend however is hosted on GCP together with a Postgres DB.

## To run the app locally

- Clone the monorepository consisting of backend and frontend
- Download Postgres locally and install
- Set the mondocta .env variables for
    - DATABASE_TYPE=postgres
    - DATABASE_URL= your local postgres url
    - MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
    - STORE_CORS=http://localhost:8000,http://localhost:7001
    - MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY=mondocta-storefront
      
- Set the mondocta-storefront .env variables for
    - NEXT_PUBLIC_BASE_URL=http://localhost:8000
    - NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
    - POSTGRES_URL=your local postgres address
 
- install medusa CLI package `npm i @medusajs/medusa-cli`
- Run `npx medusa seed` in the terminal in Mondocta(Backend) direectory to seed the database 
- Run the backend `npm dev`
- Navigate to the storefront (mondocta-storefront) and run it as well using `npm dev`
