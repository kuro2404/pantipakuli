/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports={
  env:{
    "BASE_URL": "https://pantipakuli.vercel.app/",
    "MONGODB_URI":"mongodb+srv://kuro:kuro@cluster0.3t7sasr.mongodb.net/?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET":"2MqS&V^f_&UudgstXMbnd3LTdC_zkSzBYVB#Q=9%Rjm&fFBW6zTE3^s646k",
    "REFRESH_TOKEN_SECRET":"S%=VY!nj3rkK@?VZ_v?bQVFzhz^rSA#vKgJ4Rb23j_XCjQXU?fY9AmA-MgJWHae9f*Xz%P*x$WaGT*7c8HM67B-R%Z_zc"
  }
}