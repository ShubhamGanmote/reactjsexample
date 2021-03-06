import React from 'react';

const Clock = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xlink='http://www.w3.org/1999/xlink'
			width='22'
			height='22'
			viewBox='0 0 22 22'
		>
			<image
				id='clock'
				width='22'
				height='22'
				href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAB4klEQVQ4jaWUvSuFYRjGf+cJZTiLpAxSFiUDwymDko9YnM16/gALA7IYLcJg8gdYDExKKR8ZOSWTsigZLLLYGI7u03XrcXq/5Kq33ud+7ufX/XzcV+n49JwU9QI1YA4YAboUfwfugTPgAHhNWhwSYmVgD3gGtoCpCIr+pzT3rNxyK6StZTwEnAADUewRuAReNO4TeBBoB5aAeaAKPCSBDXoNdGt8BawD9ZSjqqjqSRViaycc7kdRVqUOXQOmW6Bj+lx15axp3C1GOQZvRtu3xB2g0VLhob5YDeU6fECsJthufzHa/m7K1rO0q7WI1Rv0pNoVXE+otIgaWotYtaB3im4/7aKKqC6GaTbo8aMn9V85YzREj/+lALQT6MiYd0ZXUuel6QboAY5y4E0F9T7qqCzV9E6rGXBnvAcZCmrTLH0CCzlwZ9wHuRTq/cof4DPAcDRXEcN0FmR9XwpY75cKwseBO8VKWotYB0F+uq+gGcpKDtjhd9F4RWsR69VfxQbwpP9tYLVA5V7pqtYghrF+TOhDF/IWwS9yzryiHIe+iWGsX35sPmp+6kZvW7vNMXqXVZpq9A63FjfrM5cyQzFADIllF2VnattvVupK6jxLWAb65VhWrTeRyf4tZnOWY7m/oADfrhpvaPil55QAAAAASUVORK5CYII='
			/>
		</svg>
	);
};

export default Clock;
