// @ts-check

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,

	swcMinify: true,

	images: {
		domains: [
			'source.unsplash.com',
			'lastfm.freetls.fastly.net',
			'i.scdn.co',
			'cdn.discordapp.com',
		],
	},

	async redirects() {
		return [
			{
				source: '/movezen',
				destination: 'https://movezenlogistiek.co.uk',
				permanent: true,
			},
			{
				source: '/favsong',
				destination: 'https://www.youtube.com/watch?v=6IKImMOOziE',
				permanent: true,
			},
			{
				source: '/github',
				destination: 'https://github.com/lavendercoloredfolf',
				permanent: true
			},
		];
	},
};

export default config;
