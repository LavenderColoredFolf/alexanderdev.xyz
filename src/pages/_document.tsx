import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class AlistairDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="https://avatars.githubusercontent.com/u/107295665?v=4"
					/>
					<meta name="theme-color" content="#E6E6FA" />
					<meta
						name="description"
						content="Alexander Hyman - Freelance Developer from Canada"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script async src="/theme.js" />
					<script async defer src="https://lab.alistair.cloud/latest.js" />
				</body>
			</Html>
		);
	}
}
