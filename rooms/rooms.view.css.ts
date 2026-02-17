namespace $.$$ {
	const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r},${g},${b},${a})` as any

	$mol_style_define($club_rooms, {
		flex: {
			grow: 1,
		},
		boxShadow: 'none',
		border: {
			radius: '0px',
		},
		background: {
			color: 'transparent',
		},

		Room: {
			display: 'flex',
			flex: {
				direction: 'column',
			},
			padding: {
				top: '20px',
				right: '30px',
				bottom: '20px',
				left: '30px',
			},
			margin: {
				bottom: '20px',
			},
			background: {
				color: $mol_theme.card,
			},
			boxShadow: `10px 15px 40px ${rgba(83, 91, 110, 0.11)}`,
			border: {
				radius: '15px',
			},
			gap: '0.25rem',
		},

		Room_title: {
			font: {
				size: '1.1rem',
				weight: 'bold',
			},
		},

		Room_subtitle: {
			color: $mol_theme.shade,
		},

		Room_members: {
			font: {
				size: '0.85rem',
			},
			color: $mol_theme.shade,
		},

		Body_content: {
			gap: '0px',
		},
	})
}
