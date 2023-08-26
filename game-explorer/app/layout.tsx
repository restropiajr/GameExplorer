import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'GameExplorer',
	description:
		'A dynamic website that allows users to explore and provide feedback to videogames.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
